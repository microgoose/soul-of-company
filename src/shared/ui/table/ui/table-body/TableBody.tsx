import {ReactNode} from "react";
import {TableRowType, useTableContext} from "@/shared/ui/table/model/table/use-table.ts";

interface TableRowsProps {
    children: (row: TableRowType, index: number) => ReactNode
}

export const TableBody = ({children}: TableRowsProps) => {
    const controller = useTableContext();

    return (
        <tbody>
            {controller.rows.map(children)}
        </tbody>
    );
};