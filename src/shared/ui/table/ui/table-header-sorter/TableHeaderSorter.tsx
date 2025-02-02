import {SortDescendingIcon} from "@/shared/assets";
import {SortingType} from "@/shared/ui/table";
import classNames from "classnames";
import {ReactNode, useMemo} from "react";
import styles from './TableHeaderSorter.module.scss';

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