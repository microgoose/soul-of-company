import {getRoleAuthoritiesValidationSchema} from "@/entities/role/model/role-authorities-form-validation-schema.ts";
import {ButtonState, PrimaryButton} from "@/shared/ui/button";
import {OptionsType, TagSelect} from "@/shared/ui/select";
import {yupResolver} from "@hookform/resolvers/yup";
import {t} from "i18next";
import {Controller, useForm} from "react-hook-form";
import styles from './RoleForm.module.scss';

export interface RoleAuthoritiesFormFields {
    roles: number[]
    authorities: number[]
}

interface CreateUserFormProps {
    submitText: string,
    rolesOptions: OptionsType<number>,
    authorityOptions: OptionsType<number>,
    defaultValues: RoleAuthoritiesFormFields,
    onSubmit: (roleAuthorities: RoleAuthoritiesFormFields) => void,
}

export const RoleForm = (props: CreateUserFormProps) => {
    const {rolesOptions, authorityOptions, defaultValues, submitText, onSubmit} = props;
    const {control, handleSubmit, formState: {isValid, errors}} = useForm<RoleAuthoritiesFormFields>({
        mode: 'onChange',
        resolver: yupResolver<RoleAuthoritiesFormFields>(getRoleAuthoritiesValidationSchema()),
        defaultValues
    });

    return (
        <>
            <fieldset className={styles.roleAuthoritiesFields}>
                <Controller name='roles' control={control} render={({field}) =>
                    <TagSelect
                        placeholder={t('roleAuthorities.actions.choosePosition')}
                        error={errors.roles?.message}
                        search
                        options={rolesOptions}
                        value={field.value}
                        onChange={field.onChange}
                    />
                }/>

                <Controller name='authorities' control={control} render={({field}) =>
                    <TagSelect
                        placeholder={t('roleAuthorities.actions.selectAccesses')}
                        error={errors.authorities?.message}
                        search
                        options={authorityOptions}
                        value={field.value}
                        onChange={field.onChange}
                    />
                }/>
            </fieldset>

            <PrimaryButton
                state={isValid ? ButtonState.DEFAULT : ButtonState.DISABLED}
                className={styles.submitButton}
                onClick={handleSubmit(onSubmit)}
            >
                {submitText}
            </PrimaryButton>
        </>
    );
};