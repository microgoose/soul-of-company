import {ReactNode} from "react";
import styles from './TableRow.module.scss';
import classNames from "classnames";

interface TableRowProps {
    children: ReactNode,
    disabled?: boolean,
}

export const TableRow = ({children, disabled}: TableRowProps) => {
    return (
        <tr className={classNames(styles.tr, {[styles.disabled]: disabled})}>
            {children}
        </tr>
    );
};