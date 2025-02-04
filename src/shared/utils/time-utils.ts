import {DATE_TIME_FORMAT} from "@/shared/config/date-config.ts";
import dayjs from "dayjs";

export const formatDateTime = (date: Date, dateTimeFormat: string = DATE_TIME_FORMAT) => {
    return dayjs(date).format(dateTimeFormat);
};