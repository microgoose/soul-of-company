import {useConferenceTimeController, useTemperatureMessagesController} from "@/entities/mailing";
import {useEffect} from "react";
import {
    EditWeatherNotificationForms
} from "@/widgets/edit-weather-notification-widget/ui/edit-weather-notification-forms/EditWeatherNotificationForms.tsx";
import {t} from "i18next";

export const EditWeatherNotification = () => {
    const conferenceTimeController = useConferenceTimeController();
    const temperatureMessagesController = useTemperatureMessagesController();

    useEffect(() => {
        conferenceTimeController.load();
        temperatureMessagesController.load();
    }, []);

    if (!conferenceTimeController.config || !temperatureMessagesController.messages.length) {
        return <span>{t('loading')}</span>
    }

    return <EditWeatherNotificationForms
        conferenceTime={conferenceTimeController.config}
        temperatureMessages={temperatureMessagesController.messages}
    />
};