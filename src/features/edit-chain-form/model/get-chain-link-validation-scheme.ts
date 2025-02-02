import {t} from "i18next";
import * as yup from 'yup';

export const getChainLinkValidationScheme = () => yup.object().shape({
    links: yup.array().of(
        yup.object().shape({
            role: yup
                .number()
                .required(t('chainLink.validation.roleRequired')),
            text: yup
                .string()
                .required(t('chainLink.validation.textRequired'))
        })
    ).required(t('chainLink.validation.chainCannotBeEmpty')),
});