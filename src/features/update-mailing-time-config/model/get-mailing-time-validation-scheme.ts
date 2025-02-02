import {t} from "i18next";
import * as yup from 'yup';

export const getMailingTimeValidationScheme = () => yup.object().shape({
    timeZone: yup
        .number()
        .required(t('validation.fieldMustBeFilled')),
    startTime: yup
        .string()
        .required(t('validation.fieldMustBeFilled')),
    endTime: yup
        .string()
        .required(t('validation.fieldMustBeFilled'))
});