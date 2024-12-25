import {Controller, useFormContext} from "react-hook-form";
import {Input} from "@/shared/ui/input";
import {t} from "i18next";
import {DiadocApiConfig} from "@/shared/types/entities";

export const DiadocApiFields = () => {
    const { control, formState: { errors } } = useFormContext<DiadocApiConfig>();

    return (
        <>
            <Controller name='login' control={control} render={({field}) =>
                <Input
                    label={t('diadocApiConfig.label.login')}
                    error={errors?.login?.message}
                    placeholder={t('diadocApiConfig.actions.enterLogin')}
                    {...field}
                />
            }/>

            <Controller name='password' control={control} render={({field}) =>
                <Input
                    type='password'
                    error={errors?.password?.message}
                    label={t('diadocApiConfig.label.password')}
                    placeholder={t('diadocApiConfig.actions.enterPassword')}
                    {...field}
                />
            }/>

            <Controller name='apiKey' control={control} render={({field}) =>
                <Input
                    error={errors?.apiKey?.message}
                    label={t('diadocApiConfig.label.apiKey')}
                    placeholder={t('diadocApiConfig.actions.enterApiKey')}
                    {...field}
                />
            }/>
        </>
    );
};