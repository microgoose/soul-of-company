import {ReminderTable, useRemindersController} from "@/entities/reminder";
import {RemoveEntity} from "@/features/remove-entity";
import {useDocumentTitle} from "@/shared/hooks/use-document-title.ts";
import {ActionsCell, MonoPage, TableContainer} from "@/shared/layout";
import {Reminder} from "@/shared/types/entities";
import {t} from "i18next";
import {useCallback, useEffect} from "react";


export const RemindersManagementPage = () => {
    useDocumentTitle(t('pages.reminders.title'));
    const remindersController = useRemindersController();

    const accountActions = useCallback((account: Reminder) => (
        <ActionsCell>
            <RemoveEntity tooltip={t('actions.delete')} entity={account} onRemove={remindersController.remove}/>
        </ActionsCell>
    ), [remindersController]);

    useEffect(() => remindersController.load(), []);

    return (
        <MonoPage>
            <TableContainer>
                <ReminderTable reminders={remindersController.reminders} actionsCell={accountActions}/>
            </TableContainer>
        </MonoPage>
    );
};