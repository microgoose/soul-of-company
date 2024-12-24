import {TableHeader, TableHeaderSorter, TableHeaderType, TableSorter} from "@/shared/ui/table";
import {accountTableHeaders} from "@/entities/account/ui/accounts-table/model/account-table-headers.ts";
import {t} from "i18next";

interface UserRowProps {
    header: TableHeaderType,
    controller: TableSorter
}

export const OpenAiHistoryHeader = ({header, controller}: UserRowProps) => {
    if (header.key === accountTableHeaders.actions.key) {
        return <TableHeader/>;
    }

    return (
        <TableHeader>
            <TableHeaderSorter
                sortType={controller.getColumnSortType(header)}
                onSort={() => controller.changeSorting(header)}
            >
                {header.title && t(header.title)}
            </TableHeaderSorter>
        </TableHeader>
    );
};