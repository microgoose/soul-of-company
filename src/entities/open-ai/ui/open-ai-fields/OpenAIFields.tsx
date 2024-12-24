import {Input} from "@/shared/ui/input";
import {Controller, useForm} from "react-hook-form";
import {OpenAiConfig} from "@/shared/types/entities";
import {t} from "i18next";
import styles from './OpenAIFields.module.scss';

interface Props {
    defaultValues: OpenAiConfig,
}

export const OpenAiFields = ({ defaultValues }: Props) => {
    const {control} = useForm<OpenAiConfig>({
        mode: 'onChange',
        defaultValues
    });

    return (
        <div className={styles.openAiFields}>
            <Controller name='apiKey' control={control} render={({field}) =>
                <Input
                    className={styles.apiKey}
                    label={t('openAiConfig.label.apiKey')}
                    placeholder={t('openAiConfig.label.apiKey')}
                    value={field.value}
                    onChange={field.onChange}
                />
            }/>

            <Controller name='model' control={control} render={({field}) =>
                <Input
                    className={styles.model}
                    label={t('openAiConfig.label.model')}
                    placeholder={t('openAiConfig.label.model')}
                    value={field.value}
                    onChange={field.onChange}
                />
            }/>

            <Controller name='tokens' control={control} render={({field}) =>
                <Input
                    className={styles.tokens}
                    label={t('openAiConfig.label.tokens')}
                    placeholder={t('openAiConfig.label.tokens')}
                    value={field.value}
                    onChange={field.onChange}
                />
            }/>
        </div>
    );
};