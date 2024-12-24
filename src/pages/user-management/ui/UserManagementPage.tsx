import {useDocumentTitle} from "@/shared/hooks/use-document-title.ts";
import {t} from "i18next";
import {UsersTable, useUsersController} from "@/entities/user";
import {useCallback, useEffect} from "react";
import {ControlPanel, HeaderPage, ActionsCell, TableContainer} from "@/layout";
import {UpdateEntity} from "@/features/update-entity/UpdateEntity.tsx";
import {CreateEntity} from "@/features/create-entity/CreateEntity.tsx";
import {BlockUserButton} from "@/features/block-user/BlockUserButton.tsx";
import {User} from "@/shared/types/entities";
import {UpdateUserModalForm} from "@/features/update-user-form";
import {CreateUserModalForm} from "@/features/create-user-form";

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
        <HeaderPage>
            <ControlPanel>
                <CreateEntity
                    label={t('usersManagement.addUser')}
                    modalForm={CreateUserModalForm}
                    onCreate={usersController.insert}
                />
            </ControlPanel>

            <TableContainer>
                <UsersTable users={usersController.users} actions={userActions}/>
            </TableContainer>
        </HeaderPage>
    );
};