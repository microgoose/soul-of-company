import {UsersTable, useUsersController} from "@/entities/user";
import {AddEntity} from "@/features/add-entity/AddEntity.tsx";
import {AddUserModalForm} from "@/features/add-user-form";
import {BlockUserButton} from "@/features/block-user/BlockUserButton.tsx";
import {UpdateEntity} from "@/features/update-entity/UpdateEntity.tsx";
import {UpdateUserModalForm} from "@/features/update-user-form";
import {useDocumentTitle} from "@/shared/hooks/use-document-title.ts";
import {ActionsCell, Page, PageHeader, TableContainer} from "@/shared/layout";
import {User} from "@/shared/types/entities";
import {t} from "i18next";
import {useCallback, useEffect} from "react";

export const UserManagementPage = () => {
    useDocumentTitle(t('pages.usersManagement.title'));
    const usersController = useUsersController();

    const userActions = useCallback((user: User) => (
        <ActionsCell>
            <UpdateEntity tooltip={t('actions.edit')} entity={user} onUpdate={usersController.update}>
                {(isOpen, onSubmit, entity) =>
                    <UpdateUserModalForm user={entity} isOpen={isOpen} onSubmit={onSubmit}/>
                }
            </UpdateEntity>

            <BlockUserButton user={user} onBlock={usersController.update}/>
        </ActionsCell>
    ), [usersController.update]);

    useEffect(() => usersController.load(), []);

    return (
        <Page>
            <PageHeader>
                <div/>
                <AddEntity
                    label={t('usersManagement.addUser')}
                    modalForm={AddUserModalForm}
                    onCreate={usersController.insert}
                />
            </PageHeader>
            <TableContainer>
                <UsersTable users={usersController.users} actions={userActions}/>
            </TableContainer>
        </Page>
    );
};