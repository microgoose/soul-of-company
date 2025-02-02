import classNames from "classnames";
import {ReactNode, useCallback} from "react";
import styles from './DayCalendar.module.scss';

interface CalendarProps {
    headers: string[],
    dates: Date[],
    children: (date: Date) => ReactNode,
    className?: string,
}

export const DayCalendar = ({headers, dates, children, className}: CalendarProps) => {
    const getRows = useCallback(() => {
        const cellsInRow = headers.length;
        const rows = [];
        let currentRow = [];

        for (let i = 0; i < dates.length; i++) {
            currentRow.push(
                <td key={`day-${i}`}>
                    {children(dates[i])}
                </td>
            );

            if (currentRow.length === cellsInRow) {
                rows.push(<tr key={`row-${rows.length}`}>{currentRow}</tr>);
                currentRow = [];
            }
        }
        
        if (currentRow.length > 0) {
            rows.push(<tr key={`row-${rows.length}`}>{currentRow}</tr>);
        }

        return rows;
    }, [children, dates, headers.length]);

    return (
        <div className={classNames(styles.calendarContainer, className)}>
            <table className={styles.calendarTable}>
                <thead>
                <tr>
                    {headers.map((header, index) => <th key={index}>{header}</th>)}
                </tr>
                </thead>

                <tbody>
                    {getRows()}
                </tbody>
            </table>
        </div>
    );
};