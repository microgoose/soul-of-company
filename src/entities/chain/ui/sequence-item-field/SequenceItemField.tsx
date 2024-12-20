import styles from './SequenceItemField.module.scss';
import {Input} from "@/shared/ui/input";
import {OptionsType, TinySelect} from "@/shared/ui/select";
import {FieldClassState, FieldError, useFieldState} from "@/shared/ui/field";
import {useCallback, useMemo} from "react";
import classNames from "classnames";

interface SequenceItemValue {
    role: number,
    text: string
}

interface SequenceItemFieldsProps {
    rolesOptions: OptionsType<number>,
    value: SequenceItemValue
    onChange: (value: SequenceItemValue) => void,
    errorMessage?: string
}

export const SequenceItemField = (props: SequenceItemFieldsProps) => {
    const { rolesOptions, value, onChange, errorMessage } = props;
    const fieldState = useFieldState({ error: errorMessage });
    const classFieldState = useMemo(() => classNames({
        [styles.sequenceItemField]: true,
        [styles.hasError]: errorMessage,
    }), [errorMessage]);

    const handleRoleOnChange = useCallback((role: number | number[]) => {
        onChange({
            ...value,
            role: Array.isArray(role)? role[0] : role,
        });
    }, [onChange, value]);

    const handleTextOnChange = useCallback((text: string | number) => {
        onChange({
            ...value,
            text: text as string,
        });
    }, [onChange, value]);

    return (
        <FieldClassState fieldState={fieldState} className={classFieldState}>
            <div className={styles.sequenceItem}>
                <TinySelect
                    className={styles.selectField}
                    options={rolesOptions}
                    value={value.role}
                    onChange={handleRoleOnChange}
                />

                <Input
                    className={styles.fieldBackground}
                    value={value.text}
                    onChange={handleTextOnChange}
                />
            </div>

            {errorMessage && <FieldError>{errorMessage}</FieldError>}
        </FieldClassState>
    );
};