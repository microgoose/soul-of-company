import {DoneStage, ModalForm, StageForm} from "@/shared/ui/form";
import {t} from "i18next";
import {useCallback, useEffect, useState} from "react";
import {getRolesByIds} from "@/entities/role/api/role-api.ts";
import {RoleAuthoritiesFormFields, RoleForm} from "@/entities/role/ui/role-form/RoleForm.tsx";
import {getAuthoritiesByIds} from "@/entities/authority";
import {RoleAuthorities} from "@/shared/types/entities";
import {useRolesFormFieldData} from "@/features/role/role-form/model/use-roles-form-field-data.ts";

interface CreateUserModalFormProps {
    isOpen: boolean,
    onSubmit: (roleAuthorities?: RoleAuthorities) => void,
}

const defaultValues = {
    roles: [],
    authorities: [],
};

export const CreateRoleModalForm = ({ isOpen, onSubmit }: CreateUserModalFormProps) => {
    const { rolesOptions, authoritiesOptions } = useRolesFormFieldData();
    const [createdRole, setCreatedRole] = useState<RoleAuthorities | null>(null);
    const [stage, setStage] = useState(0);

    const handleSubmit = useCallback(async (formValues: RoleAuthoritiesFormFields) => {
        const [role] = await getRolesByIds(formValues.roles);
        const authorities = await getAuthoritiesByIds(formValues.authorities);
        setStage(step => step + 1);
        setCreatedRole({ role, authorities });
    }, []);

    const handleClose = useCallback(() => {
        if (createdRole) {
            onSubmit(createdRole);
            setCreatedRole(null);
        } else {
            onSubmit();
        }
    }, [createdRole, onSubmit]);

    useEffect(() => {
        if (stage == 1 && createdRole) {
            setTimeout(() => handleClose(), 2000);
        }
    }, [createdRole, handleClose, stage]);

    useEffect(() => {
        if (isOpen) {
            setStage(0);
        }
    }, [isOpen]);
    
    return (
        <ModalForm title={t('forms.createRoleAuthorities')} isOpen={isOpen} onClose={handleClose} scrollable={false}>
            <StageForm stage={stage} stages={[
                <RoleForm
                    rolesOptions={rolesOptions}
                    authorityOptions={authoritiesOptions}
                    defaultValues={defaultValues}
                    submitText={t('actions.create')}
                    onSubmit={handleSubmit}
                />,

                <DoneStage message={t('forms.roleAuthoritiesCreated')}/>
            ]}/>
        </ModalForm>
    );
}