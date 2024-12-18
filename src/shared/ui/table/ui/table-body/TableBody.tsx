import {ReactNode} from "react";
import {TableRowType} from "@/shared/ui/table";
import {useTableContext} from "@/shared/ui/table/model/table/use-table.ts";

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