import {createContext, useContext, useEffect, useState} from "react";
import {TableControllerInterface, TableHeaderType, TableRowsType} from "./table.types.ts";

export interface UseTableProps {
    headers: TableHeaderType[],
    rows?: TableRowsType,
}

export const useTable = (props: UseTableProps): TableControllerInterface => {
    const [headers, setHeaders] = useState(props.headers);
    const [rows, setRows] = useState(props.rows || []);
    
    useEffect(() => {
        setHeaders(props.headers);
        setRows(props.rows || []);
    }, [props.headers, props.rows]);

    return {headers, rows, setHeaders, setRows};
};

export const TableContext = createContext<TableControllerInterface | null>(null);

export const useTableContext = () => {
    const controller = useContext(TableContext);

    if (!controller) {
        throw new Error('The table context is not initialized');
    }

    return controller;
}