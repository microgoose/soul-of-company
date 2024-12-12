import {useDocumentTitle} from "@/shared/hooks/use-document-title.ts";
import {t} from "i18next";
import {UsersTable, useUsersController} from "@/entities/user";
import {useCallback, useEffect} from "react";
import {ControlsSection, ManagementWidget, RowActions, TableSection} from "@/widgets/management-widget";
import {CreateUserModalForm, UpdateUserModalForm} from "@/features/user/user-form";
import {EditEntity} from "@/features/entity/edit-entity/EditEntity.tsx";
import {CreateEntity} from "@/features/entity/create-entity/CreateEntity.tsx";
import {BlockUser} from "@/features/user/block-user/BlockUser.tsx";
import {User} from "@/shared/types/entities";

export const UserManagementPage = () => {
    useDocumentTitle(t('pages.usersManagement.title'));
    const usersController = useUsersController();

    const rolesActions = useCallback((user: User) => (
        <RowActions>
            <EditEntity tooltip={t('actions.edit')} entity={user} onUpdate={usersController.update}>
                {(isOpen, onSubmit, entity) =>
                    <UpdateUserModalForm user={entity} isOpen={isOpen} onSubmit={onSubmit}/>
                }
            </EditEntity>

            <BlockUser user={user} onBlock={usersController.update}/>
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
                <UsersTable users={usersController.users} actions={rolesActions}/>
            </TableSection>
        </ManagementWidget>
    );
};