import {t} from "i18next";
import {DATE_TIME_FORMAT} from "@/shared/config/date-config.ts";
import dayjs from "dayjs";

export const parseDuration = (duration: string) => {
    const match = duration.trim().match(/^(\d+(\.\d+)?)(ms|s)$/);

    if (!match) {
        throw new Error(t('errors.incorrectDurationFormat'));
    }

    const value = parseFloat(match[1]);
    const unit = match[3];

    if (unit === 'ms') {
        return value;
    }

    return value * 1000;
}

export const formatDateTime = (date: Date, dateTimeFormat: string = DATE_TIME_FORMAT) => {
    return dayjs(date).format(dateTimeFormat);
};