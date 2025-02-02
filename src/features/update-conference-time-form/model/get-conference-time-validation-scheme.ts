import {t} from "i18next";
import * as yup from 'yup';

export const getConferenceTimeValidationScheme = () => yup.object().shape({
    conferenceID: yup
        .string()
        .required(t('validation.fieldMustBeFilled')),
    sendingTime: yup
        .string()
        .required(t('validation.fieldMustBeFilled')),
});