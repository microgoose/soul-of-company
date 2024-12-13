import {TableHeaderType} from "../table/table.types.ts";

export enum SortingType {
    NONE = 'NONE',
    ASC = 'ASC',
    DESC = 'DESC'
}

export interface DefaultSort {
    column: TableHeaderType,
    sortType: SortingType,
}

export interface TableSorter {
    column: TableHeaderType | undefined,
    sortType: SortingType,
    sort: () => void,
    changeSorting: (column: TableHeaderType, sortType?: SortingType) => void
    getColumnSortType: (column: TableHeaderType) => SortingType | undefined
}