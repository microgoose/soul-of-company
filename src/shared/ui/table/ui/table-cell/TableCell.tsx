import {ReactNode, useMemo} from "react";
import styles from './TableCell.module.scss';
import classNames from "classnames";

interface TableCellProps {
    children: ReactNode,
    className?: string,
    smallest?: boolean,
}

export const TableCell = (props: TableCellProps) => {
    const {children, className, smallest} = props;
    const classes = useMemo(() => classNames(className, styles.td, {
        [styles.smallest]: smallest
    }), [className, smallest]);
    
    return (
        <td className={classes}>
            {children}
        </td>
    );
};