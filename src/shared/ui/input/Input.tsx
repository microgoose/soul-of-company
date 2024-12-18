import {ChangeEvent, forwardRef, useCallback, useState} from "react";
import {Field, InputProperties} from "@/shared/ui/field";

export interface InputProps extends InputProperties {
    className?: string,
    value?: number | string,
    maxLength?: number,
    autoScroll?: boolean
    onChange?: (value: string | number) => void,
    onClick?: () => void,
    onFocus?: () => void,
    onBlur?: () => void,
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const {value, maxLength = 400, disabled, type, placeholder, onClick, onChange, onFocus, onBlur} = props;
    const [isActive, setIsActive] = useState(false);

    const handleInputOnChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    }, [onChange]);

    const handleInputOnFocus = useCallback(() => {
        setIsActive(true);
        onFocus?.();
    }, [onFocus, setIsActive]);

    const handleInputOnBlur = useCallback(() => {
        setIsActive(false);
        onBlur?.();
    }, [onBlur, setIsActive]);
    
    return (
        <Field {...props} isActive={isActive}>
            <input
                ref={ref}
                value={value}
                disabled={disabled}
                type={type}
                placeholder={placeholder}
                maxLength={maxLength}
                onClick={onClick}
                onChange={handleInputOnChange}
                onFocus={handleInputOnFocus}
                onBlur={handleInputOnBlur}
            />
        </Field>
    )
});