import {t} from "i18next";
import * as yup from 'yup';

export const getDiadocApiValidationScheme = () => yup.object().shape({
    login: yup
        .string()
        .required(t('validation.fieldMustBeFilled')),
    password: yup
        .string()
        .required(t('validation.fieldMustBeFilled')),
    apiKey: yup
        .string()
        .required(t('validation.fieldMustBeFilled'))
});