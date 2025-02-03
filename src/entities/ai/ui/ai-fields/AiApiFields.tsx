import {AIConfig} from "@/shared/types/entities";
import {CopyIconButton} from "@/shared/ui/copy-text";
import {Input} from "@/shared/ui/input";
import {t} from "i18next";
import {Controller, useForm} from "react-hook-form";
import styles from './AIFields.module.scss';

interface Props {
    defaultValues: AIConfig,
}

export const AiApiFields = ({ defaultValues }: Props) => {
    const {control} = useForm<AIConfig>({
        mode: 'onChange',
        values: defaultValues,
    });

    return (
        <div className={styles.openAiFields}>
            <Controller name='model' control={control} render={({field}) =>
                <Input
                    className={styles.model}
                    label={t('AIConfig.label.model')}
                    placeholder={t('AIConfig.label.model')}
                    value={field.value}
                    onChange={field.onChange}
                />
            }/>

            <Controller name='tokens' control={control} render={({field}) =>
                <Input
                    className={styles.tokens}
                    label={t('AIConfig.label.tokens')}
                    placeholder={t('AIConfig.label.tokens')}
                    value={field.value}
                    onChange={field.onChange}
                />
            }/>

            <Controller name='apiKey' control={control} render={({field}) =>
                <Input
                    className={styles.apiKey}
                    label={t('AIConfig.label.apiKey')}
                    placeholder={t('AIConfig.label.apiKey')}
                    value={field.value}
                    onChange={field.onChange}
                    afterInput={<CopyIconButton text={field.value}/>}
                />
            }/>
        </div>
    );
};