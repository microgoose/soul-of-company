import {useEffect, useState} from "react";

export type TableHeaderType<RowData> = (keyof RowData)[];
export type TableRowsType<RowData> = RowData[];

export interface TableControllerInterface<RowData> {
    headers: TableHeaderType<RowData>,
    rows: TableRowsType<RowData>,
    setHeaders: (head: TableHeaderType<RowData>) => void;
    setRows: (rows: TableRowsType<RowData>) => void;
}

export interface UseTableProps<RowData> {
    headers?: TableHeaderType<RowData>,
    rows?: TableRowsType<RowData>,
}

export const useTable = <RowData> (props: UseTableProps<RowData>): TableControllerInterface<RowData> => {
    const [headers, setHeaders] = useState<TableHeaderType<RowData>>(props.headers || []);
    const [rows, setRows] = useState<TableRowsType<RowData>>(props.rows || []);
    
    useEffect(() => {
        setHeaders(props.headers || []);
        setRows(props.rows || []);
    }, [props.headers, props.rows]);

    return {headers, rows, setHeaders, setRows};
};