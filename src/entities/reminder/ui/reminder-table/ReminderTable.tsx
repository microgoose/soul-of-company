import {Table, TableBody, TableHeaders, useTable, useTableSorting,} from "@/shared/ui/table";
import {ReminderRow} from "./ReminderRow.tsx";
import {ReactNode} from "react";
import {Reminder} from "@/shared/types/entities";
import {ReminderHeader} from "./ReminderHeader.tsx";
import {reminderHeadersList} from "./model/reminder-headers.ts";

interface UsersTableProps {
    reminders: Reminder[],
    actionsCell?: (reminder: Reminder) => ReactNode,
}

export const ReminderTable = ({reminders, actionsCell}: UsersTableProps) => {
    const tableController = useTable({
        headers: reminderHeadersList,
        rows: reminders
    });
    const sortingController = useTableSorting<Reminder>({
        controller: tableController,
        sourceRows: reminders,
        mapper: {
            author: row => row.author.fio,
            type: row => row.type.name,
            executor: row => row.executor.fio,
            sendingStatus: row => row.sendingStatus.code,
        },
    });

    return (
        <Table controller={tableController}>
            <TableHeaders>
                {(header, index) => (
                    <ReminderHeader key={index} header={header} controller={sortingController}/>
                )}
            </TableHeaders>
            <TableBody>
                {(row, index) => (
                    <ReminderRow key={index} reminder={row as Reminder} actionsCell={actionsCell} />
                )}
            </TableBody>
        </Table>
    );
}