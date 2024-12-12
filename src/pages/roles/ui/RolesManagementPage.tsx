import {useDocumentTitle} from "@/shared/hooks/use-document-title.ts";
import {t} from "i18next";
import {useCallback, useEffect} from "react";
import {ControlsSection, ManagementWidget, RowActions, TableSection} from "@/widgets/management-widget";
import {RoleAuthorityTable, useRoleAuthoritiesController} from "@/entities/role";
import {RoleAuthorities} from "@/shared/types/entities";
import {RemoveEntity} from "@/features/entity/remove-entity/RemoveEntity.tsx";
import {CreateEntity} from "@/features/entity/create-entity/CreateEntity.tsx";
import {EditEntity} from "@/features/entity/edit-entity/EditEntity.tsx";
import {CreateRoleModalForm, UpdateRoleModalForm} from "@/features/role/role-form";

export const RolesManagementPage = () => {
    useDocumentTitle(t('pages.rolesManagement.title'));
    const rolesController = useRoleAuthoritiesController();

    const rolesActions = useCallback((role: RoleAuthorities) => (
        <RowActions>
            <EditEntity tooltip={t('actions.edit')} entity={role} onUpdate={rolesController.update}>
                {(isOpen, onSubmit, entity) =>
                    <UpdateRoleModalForm isOpen={isOpen} onSubmit={onSubmit} roleAuthorities={entity}/>
                }
            </EditEntity>

            <RemoveEntity tooltip={t('actions.delete')} entity={role} onRemove={rolesController.remove}/>
        </RowActions>
    ), []);

    useEffect(() => rolesController.load(), []);

    return (
        <ManagementWidget>
            <ControlsSection>
                <CreateEntity
                    label={t('rolesManagement.addRole')}
                    modalForm={CreateRoleModalForm}
                    onCreate={rolesController.insert}
                />
            </ControlsSection>
            <TableSection>
                <RoleAuthorityTable roleAuthorities={rolesController.roles} actions={rolesActions}/>
            </TableSection>
        </ManagementWidget>
    );
};