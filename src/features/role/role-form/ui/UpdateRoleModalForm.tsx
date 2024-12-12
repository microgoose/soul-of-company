import {DoneStage, ModalForm, StageForm} from "@/shared/ui/form";
import {t} from "i18next";
import {useCallback, useEffect, useMemo, useState} from "react";
import {getRolesByIds} from "@/entities/role/api/role-api.ts";
import {RoleAuthoritiesFormFields, RoleForm} from "@/entities/role/ui/role-form/RoleForm.tsx";
import {useRolesFormFieldData} from "@/features/role/role-form/model/use-roles-form-field-data.ts";
import {getAuthoritiesByIds} from "@/entities/authority";
import {RoleAuthorities} from "@/shared/types/entities";

interface UpdateUserModalFormProps {
    roleAuthorities: RoleAuthorities,
    isOpen: boolean,
    onSubmit: (roleAuthorities?: RoleAuthorities) => void,
}

export const UpdateRoleModalForm = ({ isOpen, onSubmit, roleAuthorities }: UpdateUserModalFormProps) => {
    const { rolesOptions, authoritiesOptions } = useRolesFormFieldData();
    const [updatedRoleAuthorities, setUpdatedRoleAuthorities] = useState<RoleAuthorities | null>(null);
    const [stage, setStage] = useState(0);
    
    const defaultValues = useMemo(() => {
        const roles = [roleAuthorities.role.id];
        const authorities = roleAuthorities.authorities.map(item => item.id);
        return { roles, authorities };
    }, [roleAuthorities.authorities, roleAuthorities.role.id]);

    const handleSubmit = useCallback(async (formValues: RoleAuthoritiesFormFields) => {
        const [role] = await getRolesByIds(formValues.roles);
        const authorities = await getAuthoritiesByIds(formValues.authorities);
        setStage(step => step + 1);
        setUpdatedRoleAuthorities({
            ...updatedRoleAuthorities,    
            role,
            authorities 
        });
    }, [updatedRoleAuthorities]);

    const handleClose = useCallback(() => {
        if (updatedRoleAuthorities) {
            onSubmit(updatedRoleAuthorities);
            setUpdatedRoleAuthorities(null);
        } else {
            onSubmit();
        }
    }, [updatedRoleAuthorities, onSubmit]);

    useEffect(() => {
        if (stage == 1 && updatedRoleAuthorities) {
            setTimeout(() => handleClose(), 2000);
        }
    }, [updatedRoleAuthorities, handleClose, stage]);

    useEffect(() => {
        if (isOpen) {
            setStage(0);
        }
    }, [isOpen]);

    return (
        <ModalForm title={t('forms.editRoleAuthorities')} isOpen={isOpen} onClose={onSubmit} scrollable={false}>
            <StageForm stage={stage} stages={[
                <RoleForm
                    rolesOptions={rolesOptions}
                    authorityOptions={authoritiesOptions}
                    defaultValues={defaultValues}
                    submitText={t('actions.save')}
                    onSubmit={handleSubmit}
                />,

                <DoneStage message={t('forms.roleAuthoritiesUpdated')} />
            ]}/>
        </ModalForm>
    );
}