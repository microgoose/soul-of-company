import styles from './RowActions.module.scss';
import {ReactNode} from "react";

interface TableCellActionsProps {
    children: ReactNode,
}

export const RowActions = ({ children }: TableCellActionsProps) => {
    return (
        <div className={styles.actionCell}>
            {children}
        </div>
    );
};