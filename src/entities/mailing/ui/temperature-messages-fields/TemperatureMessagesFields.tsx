import {Controller, useFieldArray, useFormContext} from "react-hook-form";
import {t} from "i18next";
import {Input} from "@/shared/ui/input";
import styles from './TemperatureMessagesFields.module.scss';
import {TemperatureMessage} from "@/shared/types/entities";
import {EmptyButton, IconButton} from "@/shared/ui/button";
import {BasketIcon, PlusIcon} from "@/shared/assets";
import {useCallback} from "react";

export interface TemperatureMessagesFieldsType {
    messages: TemperatureMessage[],
}

export const TemperatureMessagesFields = () => {
    const { control } = useFormContext<TemperatureMessagesFieldsType>();
    const { fields, append, remove } = useFieldArray({ control, name: 'messages'});

    const handleAppendMessage = useCallback(() => {
        append({ minTemperature: 0, maxTemperature: 0, message: '' });
    }, [append]);
    
    return (
        <div className={styles.temperatureMessagesContainer}>
            <div className={styles.addMessageContainer}>
                <EmptyButton className={styles.addMessageButton} onClick={handleAppendMessage}>
                    <PlusIcon/>
                    {t('temperatureMessage.actions.addMessage')}
                </EmptyButton>
            </div>

            <div className={styles.temperatureMessages}>
                {fields.map((item, index) => (
                    <div className={styles.temperatureMessage} key={item.id}>
                        <Controller name={`messages.${index}.maxTemperature`} control={control} render={({field}) =>
                            <Input
                                type='number'
                                className={styles.minTemperatureField}
                                label={t('temperatureMessage.label.minTemperature')}
                                placeholder={t('temperatureMessage.actions.enterMinTemperature')}
                                postfix='С°'
                                {...field}
                            />
                        }/>

                        <Controller name={`messages.${index}.minTemperature`} control={control} render={({field}) =>
                            <Input
                                type='number'
                                className={styles.maxTemperatureField}
                                label={t('temperatureMessage.label.maxTemperature')}
                                placeholder={t('temperatureMessage.actions.enterMaxTemperature')}
                                postfix='С°'
                                {...field}
                            />
                        }/>

                        <Controller name={`messages.${index}.message`} control={control} render={({field}) =>
                            <Input
                                className={styles.messageField}
                                label={t('temperatureMessage.label.message')}
                                placeholder={t('temperatureMessage.actions.enterMessage')}
                                {...field}
                            />
                        }/>

                        <IconButton
                            tooltip={t('actions.delete')}
                            className={styles.removeMessage}
                            onClick={() => remove(index)}
                        >
                            <BasketIcon/>
                        </IconButton>
                    </div>
                ))}
            </div>
        </div>
    );
};