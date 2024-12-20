import styles from './CalendarNav.module.scss';
import classNames from "classnames";
import {TinySelect} from "@/shared/ui/select";
import {useYearMonth} from "@/shared/ui/calendar-picker/model/use-year-month.ts";

interface CalendarNavProps {
    month: Date,
    onChange: (month: Date) => void,
    className?: string,
}

export const CalendarNav = ({month, onChange, className}: CalendarNavProps) => {
    const {
        monthValue, yearValue, monthOptions, yearOptions,
        handleChangeMonth, handleChangeYear
    } = useYearMonth({month, onChange, startYear: 1900});

    return (
        <nav className={classNames(styles.calendarNavContainer, className)}>
            <div className={styles.controlsSection}>
                <TinySelect value={monthValue} options={monthOptions} onChange={handleChangeMonth} />
                <TinySelect value={yearValue} options={yearOptions} onChange={handleChangeYear} />
            </div>
        </nav>
    );
}