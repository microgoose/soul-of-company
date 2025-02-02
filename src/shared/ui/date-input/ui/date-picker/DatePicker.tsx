import {PrimaryButton, SecondaryButton} from "@/shared/ui/button";
import {ButtonRadius} from "@/shared/ui/button/model/button-radius.ts";
import {DayCalendarPicker} from "@/shared/ui/calendar-picker";
import {t} from "i18next";
import styles from './DatePicker.module.scss';

interface DatePickerProps {
    value: Date | null,
    onChange: (date: Date | null) => void,
    onApply: () => void,
    onClose: () => void,
}

export const DatePicker = (props: DatePickerProps) => {
    const { value, onChange, onApply, onClose } = props;

    return (
        <div className={styles.datePicker}>
            <DayCalendarPicker month={value || undefined} selected={value} onChange={onChange}/>

            <div className={styles.controlsSection}>
                <SecondaryButton className={styles.cancellationButton} onClick={onClose} radius={ButtonRadius.SMALL}>
                    {t('actions.cancellation')}
                </SecondaryButton>
                <PrimaryButton onClick={onApply} radius={ButtonRadius.SMALL}>
                    {t('actions.apply')}
                </PrimaryButton>
            </div>
        </div>
    );
};