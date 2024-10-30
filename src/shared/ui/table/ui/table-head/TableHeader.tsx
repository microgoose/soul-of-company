import {ReactNode, useCallback, useEffect, useRef} from "react";
import styles from './TableHead.module.scss';
import {SortDescendingIcon} from "@/shared/assets";
import classNames from "classnames";
import {setupHeaderResizer, SortingType} from "@/shared/ui/table";

interface TableHeadProps {
    children?: ReactNode,
    withSorting?: boolean,
    sortType?: SortingType
    onSortClick?: () => void
}

export const TableHeader = (props: TableHeadProps) => {
    const {children, withSorting = true, sortType, onSortClick} = props;
    const thRef = useRef<HTMLTableCellElement | null>(null);
    const rightBorderRef = useRef<HTMLDivElement | null>(null);

    const sortIconClasses = useCallback(() => {
        if (sortType === null || sortType === undefined)
            return styles.sortIcon;

        return sortType == SortingType.DESC ?
            classNames(styles.sortIcon, styles.sortTypeDESC) :
            classNames(styles.sortIcon, styles.sortTypeASC);
    }, [sortType]);

    useEffect(() => {
        if (!thRef.current || !rightBorderRef.current) return;
        return setupHeaderResizer(thRef.current, rightBorderRef.current);
    });
    
    return (
        <th className={styles.th} ref={thRef} >
            <div className={styles.container}>
                <div className={styles.flexContainer}>
                    {children}
                    {withSorting && <SortDescendingIcon className={sortIconClasses()} onClick={onSortClick}/>}
                </div>

                <div className={styles.rightBorder} ref={rightBorderRef}/>
            </div>
        </th>
    );
};