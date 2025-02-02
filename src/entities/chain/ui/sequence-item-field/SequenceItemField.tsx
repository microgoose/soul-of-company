import {FieldClassState, FieldError, useFieldState} from "@/shared/ui/field";
import {Input} from "@/shared/ui/input";
import {OptionsType, TinySelect} from "@/shared/ui/select";
import classNames from "classnames";
import {useCallback, useMemo} from "react";
import styles from './SequenceItemField.module.scss';

export interface SequenceItemValue {
    role: number,
    text: string
}

interface SequenceItemFieldsProps {
    rolesOptions: OptionsType<number>,
    value: SequenceItemValue
    onChange: (value: SequenceItemValue) => void,
    roleError?: string,
    textError?: string,
}

export const SequenceItemField = (props: SequenceItemFieldsProps) => {
    const { rolesOptions, value, onChange, roleError, textError } = props;
    const fieldState = useFieldState({ error: roleError || textError });
    const classFieldState = useMemo(() => classNames({
        [styles.sequenceItemField]: true,
        [styles.hasError]: fieldState.hasError,
    }), [fieldState.hasError]);

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

            {roleError && <FieldError>{roleError}</FieldError>}
            {textError && <FieldError>{textError}</FieldError>}
        </FieldClassState>
    );
};