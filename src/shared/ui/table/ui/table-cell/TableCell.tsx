import {ReactNode} from "react";
import styles from './TableCell.module.scss';

interface TableCellProps {
    children: ReactNode
}

export const TableCell = ({children}: TableCellProps) => {
    return (
        <td className={styles.td}>
            {children}
        </td>
    );
};