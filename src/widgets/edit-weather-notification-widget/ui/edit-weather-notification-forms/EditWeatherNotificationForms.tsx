import {TemperatureMessagesList, UseTemperatureMessagesController} from "@/entities/mailing";
import {CreateEntity} from "@/features/create-entity";
import {RemoveEntity} from "@/features/remove-entity";
import {TemperatureMessagesForm} from "@/features/temperature-message-form";
import {ConferenceTimeForm, useUpdateConferenceTimeForm} from "@/features/update-conference-time-form";
import {UpdateEntity} from "@/features/update-entity";
import {ConferenceTime, TemperatureMessage} from "@/shared/types/entities";
import {Fieldset} from "@/shared/ui/fieldset";
import {
    WeatherNotificationLegend
} from "@/widgets/edit-weather-notification-widget/ui/weather-notification-legend/WeatherNotificationLegend.tsx";
import {t} from "i18next";
import {useCallback, useMemo} from "react";
import styles from './EditWeatherNotificationForms.module.scss';

type Props = {
    conferenceTime: ConferenceTime,
    temperatureMessagesController: UseTemperatureMessagesController,
};

export const EditWeatherNotificationForms = (props: Props) => {
    const { conferenceTime, temperatureMessagesController } = props;
    const weatherNotificationForm = useUpdateConferenceTimeForm(conferenceTime);

    const addMessage = useMemo(() => (
        <CreateEntity
            label={t('temperatureMessage.actions.addMessage')} 
            onCreate={temperatureMessagesController.add}
            modalForm={({ isOpen, onSubmit }) =>
                <TemperatureMessagesForm
                    title={t('forms.editTemperatureMessage')}
                    submitText={t('temperatureMessage.actions.addMessage')}
                    isOpen={isOpen}
                    onSubmit={onSubmit}
                />    
            }
        />
    ), [temperatureMessagesController.add]);

    const actions = useCallback((message: TemperatureMessage) => (
        <>
            <UpdateEntity
                tooltip={t('actions.edit')}
                entity={message}
                onUpdate={temperatureMessagesController.update}
            >
                {(isOpen, onSubmit, entity) =>
                    <TemperatureMessagesForm
                        title={t('forms.createTemperatureMessage')}
                        submitText={t('temperatureMessage.actions.updateMessage')}
                        message={entity}
                        isOpen={isOpen}
                        onSubmit={onSubmit}
                    />
                }
            </UpdateEntity>
            <RemoveEntity
                tooltip={t('actions.delete')}
                entity={message}
                onRemove={temperatureMessagesController.remove}
            />
        </>
    ), [temperatureMessagesController]);
    
    return (
        <Fieldset legend={<WeatherNotificationLegend/>} fieldsClassName={styles.weatherNotificationForms}>
            <div className={styles.conferenceTimeFormContainer}>
                <ConferenceTimeForm form={weatherNotificationForm}/>
            </div>
            <div className={styles.temperatureMessagesContainer}>
                <TemperatureMessagesList
                    messages={temperatureMessagesController.messages}
                    addMessageSlot={addMessage}
                    actionsSlot={actions}
                />
            </div>
        </Fieldset>
    );
};