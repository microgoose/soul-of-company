import {ReactNode} from "react";
import styles from './ActionsCell.module.scss';

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