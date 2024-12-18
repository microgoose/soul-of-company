import {t} from "i18next";
import {useDocumentTitle} from "@/shared/hooks/use-document-title.ts";
import {useCallback, useEffect} from "react";
import {Reminder} from "@/shared/types/entities";
import {ManagementWidget, RowActions, TableSection} from "@/widgets/management-widget";
import {RemoveEntity} from "@/features/remove-entity";
import styles from "./RemindersManagementPage.module.scss";
import {ReminderTable, useRemindersController} from "@/entities/reminder";

export const RemindersManagementPage = () => {
    useDocumentTitle(t('pages.reminders.title'));
    const remindersController = useRemindersController();

    const accountActions = useCallback((account: Reminder) => (
        <RowActions>
            <RemoveEntity tooltip={t('actions.delete')} entity={account} onRemove={remindersController.remove}/>
        </RowActions>
    ), [remindersController]);

    useEffect(() => remindersController.load(), []);

    return (
        <ManagementWidget className={styles.accountsManagementWidget}>
            <TableSection>
                <ReminderTable reminders={remindersController.reminders} actionsCell={accountActions}/>
            </TableSection>
        </ManagementWidget>
    );
};