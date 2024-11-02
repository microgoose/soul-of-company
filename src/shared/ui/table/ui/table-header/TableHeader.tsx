import {ReactNode, useEffect, useRef} from "react";
import styles from './TableHeader.module.scss';
import {setupHeaderResizer} from "@/shared/ui/table";

interface TableHeadProps {
    children?: ReactNode,
}

export const TableHeader = ({children}: TableHeadProps) => {
    const thRef = useRef<HTMLTableCellElement | null>(null);
    const rightBorderRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!thRef.current || !rightBorderRef.current) return;
        return setupHeaderResizer(thRef.current, rightBorderRef.current);
    });

    return (
        <th className={styles.th} ref={thRef}>
            <div className={styles.container}>
                <div className={styles.centerContent}>
                    {children}
                </div>

                <i className={styles.rightContent} ref={rightBorderRef}/>
            </div>
        </th>
    );
};