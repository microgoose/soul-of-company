import {NewAIConfig} from "@/shared/types/entities";
import {Input} from "@/shared/ui/input";
import {t} from "i18next";
import {Controller, UseFormReturn} from "react-hook-form";

interface Props {
    form: UseFormReturn<NewAIConfig>,
}

export const AiConfigFields = ({ form }: Props) => {
    const {control} = form;

    return (
        <>
            <Controller name='model' control={control} render={({field}) =>
                <Input
                    label={t('AIConfig.label.model')}
                    error={form.formState.errors.model?.message}
                    placeholder={t('AIConfig.label.model')}
                    value={field.value}
                    onChange={field.onChange}
                />
            }/>

            <Controller name='tokens' control={control} render={({field}) =>
                <Input
                    label={t('AIConfig.label.tokens')}
                    type={'number'}
                    error={form.formState.errors.tokens?.message}
                    placeholder={t('AIConfig.label.tokens')}
                    value={field.value}
                    onChange={field.onChange}
                />
            }/>

            <Controller name='apiKey' control={control} render={({field}) =>
                <Input
                    label={t('AIConfig.label.apiKey')}
                    error={form.formState.errors.apiKey?.message}
                    placeholder={t('AIConfig.label.apiKey')}
                    value={field.value}
                    onChange={field.onChange}
                />
            }/>
        </>
    );
};