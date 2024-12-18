import {TableCell} from "@/shared/ui/table/ui/table-cell/TableCell.tsx";
import {TableRow} from "@/shared/ui/table";
import {ReactNode} from "react";
import {Reminder} from "@/shared/types/entities";
import {formatDate} from "@/shared/utils/date-utils.ts";
import {ReminderSendingStatus} from "../reminder-sending-status/ReminderSendingStatus.tsx";
import styles from './ReminderTable.module.scss';

interface RoleRowProps {
    reminder: Reminder
    actionsCell?: (role: Reminder) => ReactNode,
}

export const ReminderRow = ({reminder, actionsCell}: RoleRowProps) => {
    return (
        <TableRow>
            <TableCell>{reminder.number}</TableCell>
            <TableCell>{reminder.author.fio}</TableCell>
            <TableCell>
                <span className={styles.textColumn}>{reminder.text}</span>
            </TableCell>
            <TableCell>{reminder.type.name}</TableCell>
            <TableCell>{formatDate(reminder.createdAt)}</TableCell>
            <TableCell>{formatDate(reminder.assignedAt)}</TableCell>
            <TableCell>{reminder.executor.fio}</TableCell>
            <TableCell>
                <ReminderSendingStatus reminder={reminder}/>
            </TableCell>
            <TableCell smallest>
                {actionsCell && actionsCell(reminder)}
            </TableCell>
        </TableRow>
    );
}