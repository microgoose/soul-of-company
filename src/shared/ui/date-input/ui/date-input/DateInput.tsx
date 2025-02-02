import {ChevronDown} from "@/shared/assets";
import {useAutoScroll} from "@/shared/hooks/use-auto-scroll.ts";
import {useToggle} from "@/shared/hooks/use-toggle.ts";
import {
    FieldClassState,
    FieldError,
    FieldInputContainer,
    FieldLabel,
    InputProperties,
    useFieldState
} from "@/shared/ui/field";
import {OuterClick} from "@/shared/ui/outer-click";
import {Popover, PositionState} from "@/shared/ui/popover";
import {formatDate, isDateValid, toDate} from "@/shared/utils/date-utils.ts";
import classNames from "classnames";
import {ChangeEvent, forwardRef, useCallback, useMemo, useState} from "react";
import {DatePicker} from "../date-picker/DatePicker.tsx";
import styles from './DateInput.module.scss';

interface DatePickerProps extends InputProperties {
    value: string, 
    dateFormat?: string,
    autoScroll?: boolean
    onFocus?: () => void,
    onBlur?: () => void,
    onChange?: (value: string) => void,
}

export const DateInput = forwardRef<HTMLInputElement, DatePickerProps>((props, ref) => {
    const {
        label, error, value, onBlur, onChange, onFocus,
        dateFormat = 'DD.MM.YYYY',
        autoScroll = true,
        ...attrs
    } = props;

    const { isOpen, close, toggle } = useToggle(false);
    const [ isFocusOnInput, setIsFocusOnInput ] = useState(false);
    const [ pickerPosition, setPickerPosition ] = useState<PositionState>(PositionState.IS_BELOW);
    
    const fieldState = useFieldState({...props, isActive: isFocusOnInput || isOpen});
    const fieldClassState = useMemo(() => classNames({
        [styles.isPickerOpen]: isOpen,
        [styles.isPickerBelow]: pickerPosition === PositionState.IS_BELOW,
        [styles.isPickerAbove]: pickerPosition === PositionState.IS_ABOVE,
    }), [isOpen, pickerPosition]);

    const dateInputRef = useAutoScroll(autoScroll && fieldState.isActive);

    const dateValue = useMemo(() => {
        return isDateValid(value, dateFormat)? toDate(value, dateFormat) : null;
    }, [dateFormat, value]);
    
    const handleOnChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    }, [onChange]);
    
    const handleOnPickDate = useCallback((newDate: Date | null) => {
        if (newDate) {
            onChange?.(formatDate(newDate, dateFormat));
        } else {
            onChange?.('');
        }
    }, [dateFormat, onChange]);

    const handleCancel = useCallback(() => {
        onChange?.('');
        close();
    }, [onChange, close]);
    
    const handleOnFocus = useCallback(() => {
        setIsFocusOnInput(true);
        onFocus?.();
    }, [onFocus]);

    const handleOnBlur = useCallback(() => {
        setIsFocusOnInput(false);
        onBlur?.();
    }, [onBlur]);

    return (
        <FieldClassState fieldState={fieldState} styles={styles} className={fieldClassState}>
            {label && <FieldLabel>{label}</FieldLabel>}

            <OuterClick
                ref={dateInputRef}
                start={isOpen}
                className={styles.dateFieldContainer}
                onOuterClick={close}
            >
                <FieldInputContainer>
                    <input
                        type='text'
                        ref={ref}
                        value={value}
                        onChange={handleOnChange}
                        onBlur={handleOnBlur}
                        onFocus={handleOnFocus}
                        {...attrs}
                    />

                    <ChevronDown
                        className={styles.toggleIcon}
                        onClick={toggle}
                        onMouseDown={e => e.preventDefault()}
                    />
                </FieldInputContainer>

                <Popover
                    isOpen={isOpen}
                    className={styles.datePicker}
                    target={dateInputRef}
                    onPosition={setPickerPosition}
                >
                    <DatePicker
                        value={dateValue}
                        onChange={handleOnPickDate}
                        onApply={close}
                        onClose={handleCancel}
                    />
                </Popover>
            </OuterClick>

            {error && <FieldError>{error}</FieldError>}
        </FieldClassState>
    );
});