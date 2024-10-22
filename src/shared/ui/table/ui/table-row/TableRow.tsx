import {ReactNode} from "react";
import styles from './TableRow.module.scss';

interface TableRowProps {
    children: ReactNode
}

export const TableRow = ({children}: TableRowProps) => {
    return (
        <tr className={styles.tr}>
            {children}
        </tr>
    );
};