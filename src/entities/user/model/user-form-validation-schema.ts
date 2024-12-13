import * as yup from 'yup';
import {t} from "i18next";
import {isDateValid, toDate} from "@/shared/utils/date-utils.ts";
import dayjs from "dayjs";

export const getRolesValidator = () => yup
    .array()
    .of(yup.number().required(t('user-management.validation.roles.required')))
    .min(1, t('user-management.validation.roles.min'))
    .required(t('user-management.validation.roles.required'));

export const getCitiesValidator = () => yup
    .array()
    .of(yup.number().required(t('user-management.validation.cities.required')))
    .min(1, t('user-management.validation.cities.min'))
    .required(t('user-management.validation.cities.required'));

export const getTelegramIdValidator = () => yup
    .string()
    .required(t('user-management.validation.telegramId.required'))
    .matches(/^\w+$/, t('user-management.validation.telegramId.invalid'));

export const getLoginValidator = () => yup
    .string()
    .required(t('user-management.validation.login.required'))
    .matches(/^[a-zA-Z0-9_]+$/, t('user-management.validation.login.invalid'));

export const getFioValidator = () => yup
    .string()
    .required(t('user-management.validation.fio.required'))
    .matches(/^[А-Яа-яЁёA-Za-z\s-]+$/, t('user-management.validation.fio.invalid'));

export const getPhoneValidator = () => yup
    .string()
    .required(t('user-management.validation.phone.required'))
    .matches(/^\+?[1-9]\d{1,14}$/, t('user-management.validation.phone.invalid'));

export const getBirthdayValidator = () => yup
    .string()
    .required(t('user-management.validation.birthday.required'))
    .test('is-valid-date', t('errors.incorrectDateFormat'), (value) => {
        return !!value && isDateValid(value);
    })
    .test('is-in-past', t('user-management.validation.birthday.future'), (value) => {
        return dayjs(toDate(value)).isBefore(new Date());
    })
    .test('is-less-than-120-years', t('user-management.validation.birthday.future'), (value) => {
        const yearsAgo = new Date(new Date().setFullYear(new Date().getFullYear() - 120));
        return dayjs(toDate(value)).isAfter(yearsAgo);
    });

export const getHiringDateValidator = () => yup
    .string()
    .required(t('user-management.validation.hiringDate.required'))
    .test('is-valid-date', t('errors.incorrectDateFormat'), (value) => {
        return !!value && isDateValid(value);
    })
    .test('is-in-past', t('user-management.validation.hiringDate.future'), (value) => {
        return dayjs(toDate(value)).isBefore(new Date());
    })
    .when('birthday', ([birthday], schema) => {
        if (birthday) {
            return schema.test(
                'hiringDate-before-birthday',
                t('user-management.validation.hiringDate.beforeBirthday'),
                (value) => {
                    if (value && birthday) {
                        return dayjs(toDate(value)).isAfter(toDate(birthday));
                    }

                    return true;
                }
            );
        }

        return schema;
    });

export const getUserValidationSchema = () => yup.object({
    roles: getRolesValidator(),
    cities: getCitiesValidator(),
    telegramId: getTelegramIdValidator(),
    login: getLoginValidator(),
    fio: getFioValidator(),
    phone: getPhoneValidator(),
    birthday: getBirthdayValidator(),
    hiringDate: getHiringDateValidator(),
});