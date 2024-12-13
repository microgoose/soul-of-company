import {t} from "i18next";
import {useDocumentTitle} from "@/shared/hooks/use-document-title.ts";
import {ManagementWidget, RowActions, TableSection} from "@/widgets/management-widget";
import {AccountsTable, useAccountController} from "@/entities/account";
import {useCallback, useEffect} from "react";
import styles from './AccountsManagementPage.module.scss';
import {DownloadFilesButton} from "@/features/download-file";
import {Account} from "@/shared/types/entities";
import {RemoveEntity} from "@/features/remove-entity";

export const AccountsManagementPage = () => {
    useDocumentTitle(t('pages.accounts.title'));
    const accountController = useAccountController();

    const accountActions = useCallback((account: Account) => (
        <RowActions>
            <RemoveEntity tooltip={t('actions.delete')} entity={account} onRemove={accountController.remove}/>
        </RowActions>
    ), [accountController]);

    useEffect(() => accountController.load(), []);

    return (
        <ManagementWidget className={styles.accountsManagementWidget}>
            <TableSection>
                <AccountsTable
                    accounts={accountController.roles}
                    fileCell={FileCell}
                    actionsCell={accountActions}
                />
            </TableSection>
        </ManagementWidget>
    );
};

const FileCell = (account: Account) => <DownloadFilesButton files={account.files}/>;