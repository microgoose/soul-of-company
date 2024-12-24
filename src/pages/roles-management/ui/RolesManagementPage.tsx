import {useDocumentTitle} from "@/shared/hooks/use-document-title.ts";
import {t} from "i18next";
import {useCallback, useEffect} from "react";
import {ControlPanel, HeaderPage, ActionsCell, TableContainer} from "@/layout";
import {RoleAuthorityTable, useRoleAuthoritiesController} from "@/entities/role";
import {RoleAuthorities} from "@/shared/types/entities";
import {RemoveEntity} from "@/features/remove-entity/RemoveEntity.tsx";
import {CreateEntity} from "@/features/create-entity/CreateEntity.tsx";
import {UpdateEntity} from "@/features/update-entity/UpdateEntity.tsx";
import {UpdateRoleModalForm} from "@/features/update-role-form";
import {CreateRoleModalForm} from "@/features/create-role-form";

export const RolesManagementPage = () => {
    useDocumentTitle(t('pages.rolesManagement.title'));
    const rolesController = useRoleAuthoritiesController();

    const rolesActions = useCallback((role: RoleAuthorities) => (
        <ActionsCell>
            <UpdateEntity tooltip={t('actions.edit')} entity={role} onUpdate={rolesController.update}>
                {(isOpen, onSubmit, entity) =>
                    <UpdateRoleModalForm isOpen={isOpen} onSubmit={onSubmit} roleAuthorities={entity}/>
                }
            </UpdateEntity>

            <RemoveEntity tooltip={t('actions.delete')} entity={role} onRemove={rolesController.remove}/>
        </ActionsCell>
    ), [rolesController]);

    useEffect(() => rolesController.load(), []);

    return (
        <HeaderPage>
            <ControlPanel>
                <CreateEntity
                    label={t('rolesManagement.addRole')}
                    modalForm={CreateRoleModalForm}
                    onCreate={rolesController.insert}
                />
            </ControlPanel>
            <TableContainer>
                <RoleAuthorityTable roleAuthorities={rolesController.roles} actions={rolesActions}/>
            </TableContainer>
        </HeaderPage>
    );
};