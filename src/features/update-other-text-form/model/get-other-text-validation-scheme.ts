import * as yup from 'yup';
import {t} from "i18next";

export const getOtherTextValidationScheme = () => yup.object().shape({
    afterAccountCreatedText: yup
        .string()
        .required(t('validation.fieldMustBeFilled')),
    mainMenuText: yup
        .string()
        .required(t('validation.fieldMustBeFilled')),
    afterAccountSentText: yup
        .string()
        .required(t('validation.fieldMustBeFilled'))
});