import style from './Table.module.scss';
import {ReactNode} from "react";
import classNames from "classnames";
import {TableControllerInterface} from "@/shared/ui/table";
import {TableContext} from "@/shared/ui/table/model/table/use-table.ts";

export interface TableProps {
    controller: TableControllerInterface,
    children: ReactNode,
    className?: string,
}

export const Table = ({controller, children, className}: TableProps) => {
    return (
        <TableContext.Provider value={controller}>
            <table className={classNames(style.table, className)}>
                {children}
            </table>
        </TableContext.Provider>
    );
};