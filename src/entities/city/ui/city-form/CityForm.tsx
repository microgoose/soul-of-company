import {ButtonState, PrimaryButton} from "@/shared/ui/button";
import {Input} from "@/shared/ui/input";
import {yupResolver} from "@hookform/resolvers/yup";
import {t} from "i18next";
import {Controller, useForm} from "react-hook-form";
import * as yup from "yup";
import styles from './CityForm.module.scss';

export interface CityFields {
    name: string
}

interface CreateUserFormProps {
    submitText: string,
    defaultValues: CityFields,
    onSubmit: (city: CityFields) => void,
}

const getCityValidationScheme = () => yup.object({
    name: yup.string().required(t('roleAuthorities.validation.authorities.required'))
});

export const CityForm = ({ submitText, defaultValues, onSubmit }: CreateUserFormProps) => {
    const {control, handleSubmit, formState: {isValid, errors}} = useForm<CityFields>({
        mode: 'onChange',
        resolver: yupResolver<CityFields>(getCityValidationScheme()),
        defaultValues,
    });

    return (
        <>
            <fieldset className={styles.roleAuthoritiesFields}>
                <Controller name='name' control={control} render={({field}) =>
                    <Input
                        placeholder={t('city.label.name')}
                        error={errors.name?.message}
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