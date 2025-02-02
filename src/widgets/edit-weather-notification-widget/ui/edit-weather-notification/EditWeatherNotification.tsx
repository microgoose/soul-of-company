import {useConferenceTimeController, useTemperatureMessagesController} from "@/entities/mailing";
import {
    EditWeatherNotificationForms
} from "@/widgets/edit-weather-notification-widget/ui/edit-weather-notification-forms/EditWeatherNotificationForms.tsx";
import {t} from "i18next";
import {useEffect} from "react";

export const EditWeatherNotification = () => {
    const conferenceTimeController = useConferenceTimeController();
    const temperatureMessagesController = useTemperatureMessagesController();

    useEffect(() => {
        conferenceTimeController.load();
        temperatureMessagesController.load();
    }, []);

    if (!conferenceTimeController.config || temperatureMessagesController.isLoading) {
        return <span>{t('loading')}</span>
    }

    return <EditWeatherNotificationForms
        conferenceTime={conferenceTimeController.config}
        temperatureMessagesController={temperatureMessagesController}
    />
};