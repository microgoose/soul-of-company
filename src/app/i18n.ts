import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {LOCALES, LOCALES_PATH} from '@/app/config'
import Backend from 'i18next-http-backend'

i18n.use(Backend)
    .use(initReactI18next)
    .init({
        lng: LOCALES.RU,
        fallbackLng: LOCALES.EN,
        backend: {
            loadPath: LOCALES_PATH + '/{{lng}}.json'
        }
    });
