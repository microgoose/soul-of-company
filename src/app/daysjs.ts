import i18n from "i18next";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

i18n.on('languageChanged', (lng) => {
    dayjs.locale(lng);
});

dayjs.locale(i18n.language);
dayjs.extend(customParseFormat);