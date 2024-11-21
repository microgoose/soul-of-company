import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {LOCALES, LOCALES_PATH} from '@/shared/config/locale-config.ts'
import Backend from 'i18next-http-backend'
import 'dayjs/locale/ru';

i18n.use(Backend)
    .use(initReactI18next)
    .init({
        lng: LOCALES.RU,
        fallbackLng: LOCALES.EN,
        backend: {
            loadPath: LOCALES_PATH + '/{{lng}}.json'
        }
    });