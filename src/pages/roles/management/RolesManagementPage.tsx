import {RoleAuthorityTable, useRoleAuthoritiesController} from "@/entities/role";
import {CreateEntity} from "@/features/add-entity/CreateEntity.tsx";
import {CreateRoleModalForm} from "@/features/add-role-form";
import {RemoveEntity} from "@/features/remove-entity/RemoveEntity.tsx";
import {UpdateEntity} from "@/features/update-entity/UpdateEntity.tsx";
import {UpdateRoleModalForm} from "@/features/update-role-form";
import {useDocumentTitle} from "@/shared/hooks/use-document-title.ts";
import {ActionsCell, Page, PageHeader, TableContainer} from "@/shared/layout";
import {RoleAuthorities} from "@/shared/types/entities";
import {t} from "i18next";
import {useCallback, useEffect} from "react";

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
        <Page>
            <PageHeader>
                <div/>
                <CreateEntity
                    label={t('rolesManagement.addRole')}
                    modalForm={CreateRoleModalForm}
                    onCreate={rolesController.insert}
                />
            </PageHeader>
            <TableContainer>
                <RoleAuthorityTable roleAuthorities={rolesController.roles} actions={rolesActions}/>
            </TableContainer>
        </Page>
    );
};