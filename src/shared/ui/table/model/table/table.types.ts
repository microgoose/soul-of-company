export interface TableHeaderType {
    key: string,
    title: string | null,
}

export type TableRowType = object;
export type TableRowsType = TableRowType[];

export interface TableControllerInterface {
    headers: TableHeaderType[],
    rows: TableRowsType,
    setHeaders: (headers: TableHeaderType[]) => void;
    setRows: (rows: TableRowsType) => void;
}