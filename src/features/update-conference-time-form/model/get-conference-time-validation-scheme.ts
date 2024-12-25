import * as yup from 'yup';
import {t} from "i18next";

export const getConferenceTimeValidationScheme = () => yup.object().shape({
    conferenceID: yup
        .string()
        .required(t('validation.fieldMustBeFilled')),
    sendingTime: yup
        .string()
        .required(t('validation.fieldMustBeFilled')),
});