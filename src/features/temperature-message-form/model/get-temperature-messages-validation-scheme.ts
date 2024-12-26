import * as yup from 'yup';
import {t} from "i18next";

export const getTemperatureMessagesValidationScheme = () => yup.object({
    minTemperature: yup
        .number()
        .transform((value) => Number.isNaN(value) ? null : value )
        .required(t('temperatureMessage.validation.minTemperatureRequired'))
        .test('min-less-than-or-equal-max', t('temperatureMessage.validation.minLessThanOrEqualMax'), function(value) {
            const { maxTemperature } = this.parent;
            return !value || !maxTemperature || value <= maxTemperature;
        }),
    maxTemperature: yup
        .number()
        .transform((value) => Number.isNaN(value) ? null : value )
        .required(t('temperatureMessage.validation.maxTemperatureRequired'))
        .test('max-greater-than-min', t('temperatureMessage.validation.maxGreaterThanMin'), function(value) {
            const { minTemperature } = this.parent;
            return !value || !minTemperature || value >= minTemperature;
        }),
    message: yup
        .string()
        .required(t('temperatureMessage.validation.messageRequired'))
});