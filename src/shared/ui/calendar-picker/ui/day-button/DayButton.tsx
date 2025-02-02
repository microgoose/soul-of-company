import classNames from "classnames";
import dayjs from "dayjs";
import {useCallback} from "react";
import styles from './DayButton.module.scss';

interface DayButtonProps {
    month: Date
    day: Date
    selected: Date | null,
    onClick: (date: Date) => void,
}

export const DayButton = ({ month, day, selected, onClick }: DayButtonProps) => {
    const isActive = selected && day.getTime() === selected.getTime();
    const isCurrentDay = dayjs(day).isSame(dayjs(), 'day');
    const isFutureDay = dayjs(day).isAfter(dayjs());
    const classState = classNames({
        [styles.dayButton]: true,
        [styles.isActive]: isActive,
        [styles.isCurrentDay]: isCurrentDay,
        [styles.isDisabled]: isFutureDay
    });
    
    const handleClick = useCallback(() => {
        if (!isFutureDay) {
            onClick(day);   
        }
    }, [day, isFutureDay, onClick]);

    if (day.getMonth() !== month.getMonth()) {
        return null;
    }

    return (
        <button className={classState} onClick={handleClick}>
            {dayjs(day).format('D')}
        </button>
    )
};