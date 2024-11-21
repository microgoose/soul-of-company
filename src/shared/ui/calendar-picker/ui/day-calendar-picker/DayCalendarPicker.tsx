import {useCallback} from "react";
import styles from './DayCalendarPicker.module.scss';
import {DayCalendar} from "../day-calendar/DayCalendar.tsx";
import {CalendarNav} from "../calendar-nav/CalendarNav.tsx";
import {DayButton} from "../day-button/DayButton.tsx";
import {useDayCalendar} from "@/shared/ui/calendar-picker/model/use-day-calendar.ts";

interface CalendarPickerProps {
    selected: Date | null,
    onChange: (date: Date) => void,
    month?: Date,
}

export const DayCalendarPicker = (props: CalendarPickerProps) => {
    const { selected, onChange } = props;
    const { month, daysWeek, days, setMonth } = useDayCalendar(props);
    const onMonthChange = useCallback((month: Date) => setMonth(month), [setMonth]);

    return (
        <div className={styles.calendarPicker}>
            <CalendarNav
                className={styles.navSection}
                month={month}
                onChange={onMonthChange}
            />
            <DayCalendar className={styles.calendarSection} headers={daysWeek} dates={days}>
                {(day) =>
                    <DayButton month={month} day={day} selected={selected} onClick={onChange} />
                }
            </DayCalendar>
        </div>
    );
};