import {CrossedOutEye, Eye} from "@/shared/assets";
import {Field, InputProperties} from "@/shared/ui/field";
import IMask from "imask";
import {ChangeEvent, forwardRef, ReactNode, useCallback, useMemo, useState} from "react";
import styles from './Input.module.scss';

export interface InputProps extends InputProperties {
    className?: string,
    value: string | number,
    afterInput?: ReactNode,
    maxLength?: number,
    autoScroll?: boolean
    postfix?: string,
    mask?: string,
    onChange?: (value: string | number) => void,
    onClick?: () => void,
    onFocus?: () => void,
    onBlur?: () => void,
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const {
        value,
        afterInput,
        maxLength = 400,
        disabled,
        placeholder,
        postfix,
        mask,
        onClick,
        onChange,
        onFocus,
        onBlur
    } = props;

    const [isActive, setIsActive] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const type = useMemo(() => {
        if (showPassword || (postfix && !isActive))
            return 'text';
        return props.type || 'text';
    }, [isActive, postfix, props.type, showPassword]);

    const formattedValue = useMemo(() => {
        if (postfix && !isActive) {
            if (!value)
                return value;

            return value.toString().endsWith(postfix) ? value.toString() : `${value}${postfix}`;
        } else {
            return value;
        }
    }, [isActive, postfix, value]);

    const handleInputOnChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        let inputValue = e.target.value;

        if (postfix && inputValue.match(postfix)) {
            inputValue = inputValue.replace(postfix, '');
        }

        if (mask) {
            const masked = IMask.createMask({mask});
            masked.resolve(inputValue);
            inputValue = masked.value;
        }
        
        onChange?.(inputValue);
    }, [mask, onChange, postfix]);

    const handleInputOnFocus = useCallback(() => {
        setIsActive(true);
        onFocus?.();
    }, [onFocus, setIsActive]);

    const handleInputOnBlur = useCallback(() => {
        setIsActive(false);
        onBlur?.();
    }, [onBlur, setIsActive]);

    const handleTogglePassword = useCallback(() => {
        setShowPassword(!showPassword);
    }, [showPassword]);

    return (
        <Field {...props} isActive={isActive}>
            <input
                ref={ref}
                value={formattedValue}
                disabled={disabled}
                type={type}
                placeholder={placeholder}
                maxLength={maxLength}
                onClick={onClick}
                onChange={handleInputOnChange}
                onFocus={handleInputOnFocus}
                onBlur={handleInputOnBlur}
            />

            {(props.type === 'password' && type === 'text')
                && <Eye className={styles.showPassword} onClick={handleTogglePassword}/>}
            {(props.type === 'password' && type === 'password')
                && <CrossedOutEye className={styles.showPassword} onClick={handleTogglePassword}/>}
            {afterInput}
        </Field>
    )
});