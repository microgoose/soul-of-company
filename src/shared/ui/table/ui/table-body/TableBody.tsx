import {ReactNode} from "react";
import styles from './TableBody.module.scss';

interface TableRowsProps {
    children: ReactNode
}

export const TableBody = ({children}: TableRowsProps) => {
    return (
        <tbody className={styles.tbody}>
            {children}
        </tbody>
    );
};