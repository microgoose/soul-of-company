import {useEffect, useMemo, useState} from "react";
import {t} from "i18next";
import {getCalendarDates} from "@/shared/utils/date-utils.ts";

interface UseDayCalendarProps {
    month?: Date,
}

const getDaysWeek = () => [
    t('dates.week.mon'), t('dates.week.tue'),
    t('dates.week.wed'), t('dates.week.thu'), t('dates.week.fri'),
    t('dates.week.sat'), t('dates.week.sun')
];

export const useDayCalendar = (props: UseDayCalendarProps) => {
    const [month, setMonth] = useState(props.month || new Date());
    const daysWeek = useMemo(getDaysWeek, []);
    const days = useMemo(() => getCalendarDates(month), [month]);

    useEffect(() => props.month && setMonth(props.month), [props.month]);

    return {month, daysWeek, days, setMonth};
};