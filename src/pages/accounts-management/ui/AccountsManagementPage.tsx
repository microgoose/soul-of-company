import {useDocumentTitle} from "@/shared/hooks/use-document-title.ts";
import {t} from "i18next";
import {AccountsTable, useAccountController} from "@/entities/account";
import {useCallback, useEffect} from "react";
import {Account} from "@/shared/types/entities";
import {ActionsCell, HeaderPage, TableContainer} from "@/layout";
import {RemoveEntity} from "@/features/remove-entity";
import {DownloadFilesButton} from "@/features/download-file";

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
        <HeaderPage>
            <div/>
            <TableContainer>
                <AccountsTable
                    accounts={accountController.accounts}
                    fileCell={FileCell}
                    actionsCell={accountActions}
                />
            </TableContainer>
        </HeaderPage>
    );
};

const FileCell = (account: Account) => <DownloadFilesButton files={account.files}/>;