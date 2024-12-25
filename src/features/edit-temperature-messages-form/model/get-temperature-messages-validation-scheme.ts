import * as yup from 'yup';
import {t} from "i18next";

export const getTemperatureMessagesValidationScheme = () => yup.object().shape({
    messages: yup.array().of(
        yup.object().shape({
            minTemperature: yup
                .number()
                .required(t('temperatureMessage.validation.minTemperatureRequired')),
            maxTemperature: yup
                .number()
                .required(t('temperatureMessage.validation.maxTemperatureRequired')),
            message: yup
                .string()
                .required(t('temperatureMessage.validation.messageRequired'))
        })
    ).required(t('temperatureMessage.validation.temperatureMessagesCannotBeEmpty')),
});