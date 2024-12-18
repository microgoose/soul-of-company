import styles from './SequenceItemField.module.scss';
import {Input} from "@/shared/ui/input";
import {OptionType, OptionValueType, TinySelect} from "@/shared/ui/select";
import {FieldClassState, FieldError, useFieldState} from "@/shared/ui/field";
import {useCallback, useMemo} from "react";
import classNames from "classnames";

interface SequenceItemValue {
    role: number,
    text: string
}

interface SequenceItemFieldsProps {
    rolesOptions: OptionType[],
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

    const handleRoleOnChange = useCallback(([role]: OptionValueType[]) => {
        onChange({
            ...value,
            role: role as number,
        });
    }, [onChange, value]);

    const handleTextOnChange = useCallback((text: number | string) => {
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
                    value={[value.role]}
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