import {useCallback, useEffect, useState} from "react";
import {DefaultSort, SortingType, TableSorter} from "./sorter.types.ts";
import {SortState} from "./sort-state.ts";
import {getSortedRows, TableControllerInterface, TableHeaderType} from "@/shared/ui/table";
import {SortableValue} from "@/shared/ui/table/model/sorter/get-sorted-rows.ts";

export interface UseTableSortingProps<Row> {
    controller: TableControllerInterface
    sourceRows: Row[],
    defaultSort?: DefaultSort,
    mapper: Record<string, (row: Row) => SortableValue>,
}

export const useTableSorting = <Row extends object> (
    props: UseTableSortingProps<Row>
): TableSorter => {
    const { 
        controller,
        sourceRows, 
        defaultSort,
        mapper,
    } = props;
    
    const [ lastSortedRows, setLastSortedRows ] = useState(props.controller.rows);
    const [ sortState, setSortState ] = useState(new SortState(defaultSort));

    const sort = useCallback(() => {
        const column = sortState.getColumn();
        const sortType = sortState.getSortType();
        const originRows = [...sourceRows];

        if (sortType === SortingType.NONE) {
            setLastSortedRows(originRows);
            controller.setRows(originRows);
            return;
        }

        if (column) {
            const sortedRows = getSortedRows(
                originRows,
                mapper[column.key] || colMapper(column.key),
                sortType
            );

            setLastSortedRows(sortedRows);
            controller.setRows(sortedRows);
        }
    }, [sortState, sourceRows, controller, mapper]);

    const changeSorting = (column: TableHeaderType, sortType?: SortingType) => {
        const columnKey = sortState.getColumn()?.key;

        if (sortType) {
            setSortState(new SortState({ column, sortType }));
            sort();
            return;
        }
        
        if (column.key === columnKey) {
            sortState.nextSorting();
        } else {
            sortState.setSorting(column, SortingType.ASC);
        }

        sort();
    };

    const getColumnSortType = (column: TableHeaderType) =>
        sortState.getColumn()?.key === column.key ? sortState.getSortType() : undefined;

    useEffect(() => {
        if (controller.rows != lastSortedRows) {
            sort();   
        }
    }, [controller.rows, lastSortedRows, sort]);

    return {
        column: sortState.getColumn(),
        sortType: sortState.getSortType(),
        sort, changeSorting, getColumnSortType
    };
};

const colMapper = <Row> (key: string) => (row: Row) => {
    const value = row[key as keyof Row] as SortableValue;

    if (value instanceof Date)
        return value;

    if (typeof value === 'object' || Array.isArray(value)) {
        throw new Error('Value can\'t be mapped: ' + value);
    }

    return value;
}