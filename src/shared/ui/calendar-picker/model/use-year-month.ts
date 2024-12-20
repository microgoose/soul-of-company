import {useCallback, useMemo} from "react";
import dayjs from "dayjs";
import {OptionsType} from "@/shared/ui/select";
import {t} from "i18next";

interface UseYearMonthProps {
    month: Date,
    onChange: (month: Date) => void,
    startYear: number,
    endYear?: number,
}

export const useYearMonth = ({month, startYear, endYear, onChange}: UseYearMonthProps) => {
    const monthValue = useMemo(() => dayjs(month).month(), [month]);
    const yearValue = useMemo(() => dayjs(month).year(), [month]);

    const handleChangeMonth = useCallback((newMonthValue: number | number[]) => {
        onChange(dayjs()
            .set('year', yearValue)
            .set('month', Array.isArray(newMonthValue)? newMonthValue[0] : newMonthValue)
            .toDate()
        );
    }, [onChange, yearValue]);
    const handleChangeYear = useCallback((newYearValue: number | number[]) => {
        onChange(dayjs()
            .set('year', Array.isArray(newYearValue)? newYearValue[0] : newYearValue)
            .set('month', monthValue)
            .toDate()
        );
    }, [monthValue, onChange]);

    const monthOptions = useMemo(getMonthOptions, []);
    const yearOptions = useMemo(() => {
        const maxYear = endYear || dayjs().year();
        const yearOptions: OptionsType<number> = [];

        for (let i = maxYear; i > startYear - 1; i--) {
            yearOptions.push({ value: i, label: i.toString() });
        }

        return yearOptions;
    }, [startYear, endYear]);

    return {
        monthValue, yearValue, monthOptions, yearOptions,
        handleChangeMonth, handleChangeYear
    };
};

const getMonthOptions = () => [
    { value: 0, label: t('dates.month.jan') },
    { value: 1, label: t('dates.month.feb') },
    { value: 2, label: t('dates.month.mar') },
    { value: 3, label: t('dates.month.apr') },
    { value: 4, label: t('dates.month.may') },
    { value: 5, label: t('dates.month.jun') },
    { value: 6, label: t('dates.month.jul') },
    { value: 7, label: t('dates.month.aug') },
    { value: 8, label: t('dates.month.sep') },
    { value: 9, label: t('dates.month.oct') },
    { value: 10, label: t('dates.month.nov') },
    { value: 11, label: t('dates.month.dec') },
];