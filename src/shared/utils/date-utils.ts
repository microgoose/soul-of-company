import {DATE_FORMAT} from "@/shared/config/date-config.ts";
import dayjs from "dayjs";

export const getCalendarDates = (date: Date): Date[] => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfWeek = new Date(year, month, 1).getDay();
    const prevMonthDays = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;
    const daysInPrevMonth = new Date(year, month, 0).getDate();
    const dates: Date[] = [];

    for (let i = prevMonthDays; i > 0; i--) {
        dates.push(new Date(year, month - 1, daysInPrevMonth - i + 1));
    }

    for (let i = 1; i <= daysInMonth; i++) {
        dates.push(new Date(year, month, i));
    }

    const remainingDays = 35 - dates.length;
    for (let i = 1; i <= remainingDays; i++) {
        dates.push(new Date(year, month + 1, i));
    }

    return dates;
};

export const formatDate = (date: Date, dateFormat: string = DATE_FORMAT) => {
    return dayjs(date).format(dateFormat);
};

export const toDate = (value: string, dateFormat: string = DATE_FORMAT) => {
    return dayjs(value, dateFormat).toDate();
};

export const isDateValid = (value: string, dateFormat: string = DATE_FORMAT) => {
    return dayjs(value, dateFormat, true).isValid();
}