import {useDocumentTitle} from "@/shared/hooks/use-document-title.ts";
import {t} from "i18next";
import {useCallback, useEffect} from "react";
import {ControlsSection, ManagementWidget, RowActions, TableSection} from "@/widgets/management-widget";
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
        <RowActions>
            <UpdateEntity tooltip={t('actions.edit')} entity={role} onUpdate={rolesController.update}>
                {(isOpen, onSubmit, entity) =>
                    <UpdateRoleModalForm isOpen={isOpen} onSubmit={onSubmit} roleAuthorities={entity}/>
                }
            </UpdateEntity>

            <RemoveEntity tooltip={t('actions.delete')} entity={role} onRemove={rolesController.remove}/>
        </RowActions>
    ), [rolesController]);

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