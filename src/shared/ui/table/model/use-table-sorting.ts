import {useCallback, useState} from "react";
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
    const [sortType, setSortType] = useState<SortingType | undefined>(undefined);

    const changeSorting = useCallback((columnKey: keyof RowData) => {
        let newSortType: SortingType | undefined = undefined;

        if (columnName === columnKey) {
            if (sortType === undefined)
                newSortType = SortingType.ASC;
            else if (sortType === SortingType.ASC)
                newSortType = SortingType.DESC;
        } else {
            setColumnName(columnKey);
            newSortType = SortingType.ASC;
        }

        if (newSortType === undefined) {
            controller.setRows(rows);
        } else {
            controller.setRows(getSortedRow(rows, columnKey, newSortType));
        }

        setSortType(newSortType);
    }, [columnName, controller, rows, sortType]);

    const getColumnSortType = useCallback(
        (columnKey: string) => (columnName === columnKey ? sortType : undefined),
        [columnName, sortType]
    );

    return { columnName, sortType, changeSorting, getColumnSortType };
};