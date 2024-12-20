import {TemperatureMessagesForm, useEditTemperatureMessagesForm} from "@/features/edit-temperature-messages-form";
import {ConferenceTimeForm, useUpdateConferenceTimeForm} from "@/features/update-conference-time-form";
import {Fieldset} from "@/shared/ui/fieldset";
import {
    WeatherNotificationLegend
} from "@/widgets/edit-weather-notification-widget/ui/weather-notification-legend/WeatherNotificationLegend.tsx";
import {ConferenceTime, TemperatureMessage} from "@/shared/types/entities";
import styles from './EditWeatherNotificationForms.module.scss';

type Props = {
    conferenceTime: ConferenceTime,
    temperatureMessages: TemperatureMessage[],
};

export const EditWeatherNotificationForms = (props: Props) => {
    const weatherNotificationForm = useUpdateConferenceTimeForm(props.conferenceTime);
    const temperatureMessagesForm = useEditTemperatureMessagesForm(props.temperatureMessages);

    return (
        <Fieldset legend={<WeatherNotificationLegend/>} fieldsClassName={styles.weatherNotificationForms}>
            <div className={styles.conferenceTimeFormContainer}>
                <ConferenceTimeForm form={weatherNotificationForm}/>
            </div>
            <div className={styles.temperatureMessagesContainer}>
                <TemperatureMessagesForm form={temperatureMessagesForm}/>
            </div>
        </Fieldset>
    );
};