import {t} from "i18next";
import * as yup from 'yup';

export const getRoleValidator = () => yup
    .array()
    .of(yup.number().required(t('roleAuthorities.validation.role.required')))
    .min(1, t('roleAuthorities.validation.role.min'))
    .required(t('roleAuthorities.validation.role.required'));

export const getAuthoritiesValidator = () => yup
    .array()
    .of(yup.number().required(t('roleAuthorities.validation.authorities.required')))
    .min(1, t('roleAuthorities.validation.authorities.min'))
    .required(t('roleAuthorities.validation.authorities.required'));

export const getRoleAuthoritiesValidationSchema = () => yup.object({
    roles: getRoleValidator(),
    authorities: getAuthoritiesValidator(),
});