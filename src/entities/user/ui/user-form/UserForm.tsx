import {getUserValidationSchema} from "../../model/user-form-validation-schema.ts";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {DateInput} from "@/shared/ui/date-input";
import {t} from "i18next";
import styles from './UserForm.module.scss';
import {ButtonState, PrimaryButton} from "@/shared/ui/button";
import {OptionType, TagSelect} from "@/shared/ui/select";
import {Input} from "@/shared/ui/input";
import {useEffect} from "react";
import {isDateValid} from "@/shared/utils/date-utils.ts";

export interface UserFormFields {
    roles: number[]
    cities: number[]
    telegramId: string
    login: string
    fio: string
    phone: string
    birthday: string
    hiringDate: string
}

interface CreateUserFormProps {
    rolesOptions: OptionType[],
    citiesOptions: OptionType[],
    defaultValues: UserFormFields,
    onSubmit: (user: UserFormFields) => void,
}

export const UserForm = ({rolesOptions, citiesOptions, defaultValues, onSubmit}: CreateUserFormProps) => {
    const {control, watch, trigger, handleSubmit, formState: {isValid, errors}} = useForm<UserFormFields>({
        mode: 'onChange',
        resolver: yupResolver<UserFormFields>(getUserValidationSchema()),
        defaultValues
    });

    const birthday = watch('birthday');
    const hiringDate = watch('hiringDate');
    useEffect(() => {
        if (isDateValid(birthday) && isDateValid(hiringDate)) {
            trigger('hiringDate');
        }
    }, [trigger, birthday, hiringDate]);

    return (
        <>
            <fieldset className={styles.userFields}>
                <Controller name='roles' control={control} render={({field}) =>
                    <TagSelect
                        label={t('user.roles')}
                        placeholder={t('actions.choose')}
                        error={errors.roles?.message}
                        multiple
                        search
                        options={rolesOptions}
                        value={field.value}
                        onChange={field.onChange}
                    />
                }/>

                <Controller name='cities' control={control} render={({field}) =>
                    <TagSelect
                        label={t('user.cities')}
                        placeholder={t('actions.choose')}
                        error={errors.cities?.message}
                        multiple
                        search
                        options={citiesOptions}
                        value={field.value}
                        onChange={field.onChange}
                    />
                }/>

                <Controller name='telegramId' control={control} render={({field}) =>
                    <Input
                        label={t('user.telegramId')}
                        placeholder='3978818'
                        type='numeric'
                        error={errors.telegramId?.message}
                        {...field}
                    />
                }/>

                <Controller name='login' control={control} render={({field}) =>
                    <Input
                        label={t('user.login')}
                        placeholder='@telegramLogin'
                        error={errors.login?.message}
                        {...field}
                    />
                }/>

                <Controller name='fio' control={control} render={({field}) =>
                    <Input
                        label={t('user.fio')}
                        placeholder={t('templates.fullName')}
                        error={errors.fio?.message}
                        {...field}
                    />
                }/>

                <Controller name='phone' control={control} render={({field}) =>
                    <Input
                        label={t('user.phone')}
                        placeholder={t('tips.enterNumber')}
                        type='tel'
                        error={errors.phone?.message}
                        {...field}
                    />
                }/>

                <Controller name='birthday' control={control} render={({field}) =>
                    <DateInput
                        label={t('user.birthday')}
                        placeholder={t('tips.selectDate')}
                        error={errors.birthday?.message}
                        {...field}
                    />
                }/>

                <Controller name='hiringDate' control={control} render={({field}) =>
                    <DateInput
                        label={t('user.hiringDate')}
                        placeholder={t('tips.selectDate')}
                        error={errors.hiringDate?.message}
                        {...field}
                    />
                }/>
            </fieldset>

            <PrimaryButton
                state={isValid ? ButtonState.DEFAULT : ButtonState.DISABLED}
                className={styles.submitButton}
                onClick={handleSubmit(onSubmit)}
            >
                {t('actions.create')}
            </PrimaryButton>
        </>
    );
};