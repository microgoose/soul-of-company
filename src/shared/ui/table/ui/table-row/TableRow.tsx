import {ReactNode} from "react";
import styles from './TableRow.module.scss';
import classNames from "classnames";

interface TableRowProps {
    className?: string,
    children: ReactNode,
    disabled?: boolean,
}

export const TableRow = ({className, children, disabled}: TableRowProps) => {
    return (
        <tr className={classNames(styles.tr, className, {[styles.disabled]: disabled})}>
            {children}
        </tr>
    );
};