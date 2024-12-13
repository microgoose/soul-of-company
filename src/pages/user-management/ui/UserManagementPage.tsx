import {useDocumentTitle} from "@/shared/hooks/use-document-title.ts";
import {t} from "i18next";
import {UsersTable, useUsersController} from "@/entities/user";
import {useCallback, useEffect} from "react";
import {ControlsSection, ManagementWidget, RowActions, TableSection} from "@/widgets/management-widget";
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
        <RowActions>
            <UpdateEntity tooltip={t('actions.edit')} entity={user} onUpdate={usersController.update}>
                {(isOpen, onSubmit, entity) =>
                    <UpdateUserModalForm user={entity} isOpen={isOpen} onSubmit={onSubmit}/>
                }
            </UpdateEntity>

            <BlockUserButton user={user} onBlock={usersController.update}/>
        </RowActions>
    ), [usersController.update]);

    useEffect(() => usersController.load(), []);

    return (
        <ManagementWidget>
            <ControlsSection>
                <CreateEntity
                    label={t('usersManagement.addUser')}
                    modalForm={CreateUserModalForm}
                    onCreate={usersController.insert}
                />
            </ControlsSection>

            <TableSection>
                <UsersTable users={usersController.users} actions={userActions}/>
            </TableSection>
        </ManagementWidget>
    );
};