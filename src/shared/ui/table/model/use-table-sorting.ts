import {useCallback, useEffect, useState} from "react";
import {TableControllerInterface, TableRowsType} from "./use-table.ts";
import {SortingType} from "./sorting-type.ts";

type SortableValue = string | number | Date | null;
type SortRowsFunction = <RowData> (rows: TableRowsType<RowData>, key: keyof RowData, sortType: SortingType) => TableRowsType<RowData>;

const getSortedRow: SortRowsFunction = (rows, key, sortType) => {
    return [...rows].sort((i1, i2) => {
        if (!key) return 0;

        let value1: SortableValue = i1[key] as SortableValue;
        let value2: SortableValue = i2[key] as SortableValue;

        if (value1 === null && value2 === null)
            return 0;

        if (value1 instanceof Date || value2 instanceof Date) {
            value1 = (value1 as Date).getTime();
            value2 = (value2 as Date).getTime();
        }

        if (sortType === SortingType.ASC) {
            if (value1 === null) return -1;
            if (value2 === null) return 1;
            if (value1 < value2) return -1;
            if (value1 > value2) return 1;
            return 0;
        } else if (sortType === SortingType.DESC) {
            if (value1 === null) return 1;
            if (value2 === null) return -1;
            if (value1 > value2) return -1;
            if (value1 < value2) return 1;
            return 0;
        }

        return 0;
    });
};


export const useTableSorting = <RowData,> (controller: TableControllerInterface<RowData>, rows: TableRowsType<RowData>) => {
    const [columnName, setColumnName] = useState<keyof RowData | undefined>(undefined);
    const [sortType, setSortType] = useState<SortingType>(SortingType.ASC);
    
    const setSorting = useCallback((columnKey: keyof RowData, newSortType: SortingType) => {
        setColumnName(columnKey);
        setSortType(newSortType);
    }, []);
    
    const changeSorting = useCallback((columnKey: keyof RowData, newSortType?: SortingType) => {
        if (newSortType) {
            setSorting(columnKey, newSortType);
        } else {
            if (columnName === columnKey) {
                if (sortType === SortingType.ASC) {
                    setSorting(columnKey, SortingType.DESC);
                } else if (sortType === SortingType.DESC) {
                    setSorting(columnKey, SortingType.ASC);
                }
            } else {
                setSorting(columnKey, SortingType.ASC);
            }   
        }
    }, [columnName, setSorting, sortType]);

    const getColumnSortType = useCallback(
        (columnKey: string) => (columnName === columnKey ? sortType : undefined),
        [columnName, sortType]
    );

    useEffect(() => {
        if (columnName) {
            controller.setRows(getSortedRow(rows, columnName, sortType));
        }
    }, [columnName, sortType]);

    return { columnName, sortType, changeSorting, setSorting, getColumnSortType };
};