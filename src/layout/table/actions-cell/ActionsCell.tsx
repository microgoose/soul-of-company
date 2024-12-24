import styles from './ActionsCell.module.scss';
import {ReactNode} from "react";

interface TableCellActionsProps {
    children: ReactNode,
}

export const ActionsCell = ({ children }: TableCellActionsProps) => {
    return (
        <div className={styles.actionCell}>
            {children}
        </div>
    );
};