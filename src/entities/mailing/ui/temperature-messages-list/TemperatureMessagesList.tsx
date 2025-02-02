import {TemperatureMessageField} from "@/entities/mailing/ui/temperature-messages-list/TemperatureMessageField.tsx";
import {TemperatureMessage} from "@/shared/types/entities";
import {t} from "i18next";
import {ReactNode} from "react";
import styles from './TemperatureMessagesList.module.scss';

export interface TemperatureMessagesListProps {
    messages: TemperatureMessage[],
    addMessageSlot: ReactNode,
    actionsSlot: (message: TemperatureMessage) => ReactNode,
}

export const TemperatureMessagesList = ({ messages, addMessageSlot, actionsSlot }: TemperatureMessagesListProps) => {
    return (
        <div className={styles.temperatureMessagesContainer}>
            <div className={styles.addMessageContainer}>
                {addMessageSlot}
            </div>

            <div className={styles.temperatureMessages}>
                {messages.map((message, index) => (
                    <div className={styles.temperatureMessage} key={index}>
                        <TemperatureMessageField
                            className={styles.minTemperatureField}
                            value={`${message.minTemperature}С°`}
                            label={t('temperatureMessage.label.minTemperature')}
                        />

                        <TemperatureMessageField
                            className={styles.maxTemperatureField}
                            value={`${message.maxTemperature}С°`}
                            label={t('temperatureMessage.label.maxTemperature')}
                        />

                        <TemperatureMessageField
                            className={styles.messageField}
                            value={message.message}
                            label={t('temperatureMessage.label.message')}
                        />

                        {actionsSlot(message)}
                    </div>
                ))}
            </div>
        </div>
    );
};