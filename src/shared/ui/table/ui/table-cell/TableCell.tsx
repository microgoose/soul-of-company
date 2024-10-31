import {ReactNode} from "react";
import styles from './TableCell.module.scss';
import classNames from "classnames";

interface TableCellProps {
    children: ReactNode,
    className?: string,
}

export const TableCell = ({children, className}: TableCellProps) => {
    return (
        <td className={classNames(styles.td, className)}>
            {children}
        </td>
    );
};