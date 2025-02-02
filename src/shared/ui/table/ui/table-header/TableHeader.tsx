import {setupHeaderResizer} from "@/shared/ui/table";
import classNames from "classnames";
import {ReactNode, useEffect, useRef} from "react";
import styles from './TableHeader.module.scss';

interface TableHeadProps {
    className?: string;
    children?: ReactNode,
}

export const TableHeader = ({className, children}: TableHeadProps) => {
    const thRef = useRef<HTMLTableCellElement | null>(null);
    const rightBorderRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!thRef.current || !rightBorderRef.current) return;
        return setupHeaderResizer(thRef.current, rightBorderRef.current);
    });

    return (
        <th className={classNames(styles.th, className)} ref={thRef}>
            <div className={styles.content}>
                {children}

                <i className={styles.rightContent} ref={rightBorderRef}/>
            </div>
        </th>
    );
};