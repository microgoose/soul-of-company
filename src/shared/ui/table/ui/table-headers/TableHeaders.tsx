import {ReactNode} from "react";
import styles from './TableHeaders.module.scss';

interface TableHeadersProps {
    children: ReactNode
}

export const TableHeaders = ({children}: TableHeadersProps) => {
    return (
        <thead className={styles.thead}>
            <tr>
                {children}
            </tr>
        </thead>
    );
};