import {t} from "i18next";
import * as yup from "yup";

export const getApiKeyValidator = () => yup
    .string()
    .required(t('AIConfig.actions.specifyApiKey'));

export const getModelValidator = () => yup
    .string()
    .required(t('AIConfig.actions.specifyModel'));

export const getTokensValidator = () => yup
    .number()
    .typeError(t('errors.invalidNumberError'))
    .required(t('AIConfig.actions.specifyTokens'))
    .min(0, t('AIConfig.validation.minTokensError'))
    .test(
        'no-leading-zero',
        t('errors.invalidNumberError'),
        (_, context) => {
            return context.originalValue && !context.originalValue.startsWith('0');
        }
    );

export const getAddAiConfigValidationSchema = () => yup.object({
    apiKey: getApiKeyValidator(),
    model: getModelValidator(),
    tokens: getTokensValidator(),
});