import {Controller, useForm} from "react-hook-form";
import {t} from "i18next";
import styles from './RoleForm.module.scss';
import {ButtonState, PrimaryButton} from "@/shared/ui/button";
import {OptionType, TagSelect} from "@/shared/ui/select";
import {yupResolver} from "@hookform/resolvers/yup";
import {getRoleAuthoritiesValidationSchema} from "@/entities/role/model/role-authorities-form-validation-schema.ts";

export interface RoleAuthoritiesFormFields {
    roles: number[]
    authorities: number[]
}

interface CreateUserFormProps {
    submitText: string,
    rolesOptions: OptionType[],
    authorityOptions: OptionType[],
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
                        multiple
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