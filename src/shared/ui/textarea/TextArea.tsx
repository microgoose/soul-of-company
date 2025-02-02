import {FieldClassState, FieldError, FieldLabel, InputProperties, useFieldState} from "@/shared/ui/field";
import {TextAreaInput} from "@/shared/ui/textarea/TextAreaInput.tsx";
import {ChangeEvent, useCallback, useState} from "react";
import styles from './TextArea.module.scss';

export interface TextAreaProps extends InputProperties {
    className?: string,
    value: string,
    onChange?: (value: string) => void,
    onClick?: () => void,
    onFocus?: () => void,
    onBlur?: () => void,
}

export const TextArea = (props: TextAreaProps) => {
    const {
        className,
        label,
        error,
        value,
        onClick,
        onChange,
        onFocus,
        onBlur
    } = props;

    const [isActive, setIsActive] = useState(false);
    const fieldState = useFieldState({ ...props, isActive });

    const handleInputOnChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
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
        <FieldClassState fieldState={fieldState} className={className}>
            {label && <FieldLabel>{label}</FieldLabel>}

            <TextAreaInput
                value={value}
                className={styles.textArea}
                onClick={onClick}
                onChange={handleInputOnChange}
                onFocus={handleInputOnFocus}
                onBlur={handleInputOnBlur}
            />

            {error && <FieldError>{error}</FieldError>}
        </FieldClassState>
    )
};