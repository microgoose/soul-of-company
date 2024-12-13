import styles from './TableHeaderSorter.module.scss';
import {SortDescendingIcon} from "@/shared/assets";
import {ReactNode, useMemo} from "react";
import {SortingType} from "@/shared/ui/table";
import classNames from "classnames";

interface TableHeadSorterProps {
    children: ReactNode,
    sortType?: SortingType
    onSort?: () => void
}

export const TableHeaderSorter = ({children, sortType, onSort}: TableHeadSorterProps) => {
    const sortIconClasses = useMemo(() => classNames({
        [styles.sortIcon]: true,
        [styles.sortTypeDESC]: sortType === SortingType.DESC,
        [styles.sortTypeASC]: sortType === SortingType.ASC,
    }), [sortType]);

    return (
        <div className={styles.sorterContainer}>
            <span>{children}</span>
            <SortDescendingIcon className={sortIconClasses} onClick={onSort}/>
        </div>
    );
};