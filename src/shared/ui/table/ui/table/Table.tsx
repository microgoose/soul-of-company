import style from './Table.module.scss';
import {ReactNode} from "react";
import classNames from "classnames";

export interface TableProps {
    children: ReactNode,
    className?: string,
}

export const Table = ({children, className}: TableProps) => {
    return (
        <table className={classNames(style.table, className)}>
            {children}
        </table>
    );
};