import {TableHeaderType} from "@/shared/ui/table/model/table/table.types.ts";
import {useTableContext} from "@/shared/ui/table/model/table/use-table.ts";
import {ReactNode} from "react";
import styles from './TableHeaders.module.scss';

interface TableHeadersProps {
    children: (header: TableHeaderType, index: number, headers: TableHeaderType[]) => ReactNode
}

export const TableHeaders = ({children}: TableHeadersProps) => {
    const controller = useTableContext();

    return (
        <thead className={styles.thead}>
            <tr>
                {controller.headers.map(children)}
            </tr>
        </thead>
    );
};