import {AccountsTable, useAccountController} from "@/entities/account";
import {DownloadFilesButton} from "@/features/download-file";
import {RemoveEntity} from "@/features/remove-entity";
import {useDocumentTitle} from "@/shared/hooks/use-document-title.ts";
import {ActionsCell, MonoPage, TableContainer} from "@/shared/layout";
import {Account} from "@/shared/types/entities";
import {t} from "i18next";
import {useCallback, useEffect} from "react";

export const AccountsManagementPage = () => {
    useDocumentTitle(t('pages.accounts.title'));
    const accountController = useAccountController();

    const accountActions = useCallback((account: Account) => (
        <ActionsCell>
            <RemoveEntity tooltip={t('actions.delete')} entity={account} onRemove={accountController.remove}/>
        </ActionsCell>
    ), [accountController]);

    useEffect(() => accountController.load(), []);

    return (
        <MonoPage>
            <TableContainer>
                <AccountsTable
                    accounts={accountController.accounts}
                    fileCell={FileCell}
                    actionsCell={accountActions}
                />
            </TableContainer>
        </MonoPage>
    );
};

const FileCell = (account: Account) => <DownloadFilesButton files={account.files}/>;