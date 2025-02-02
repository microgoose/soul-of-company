import {OptionType} from "@/shared/ui/select";
import {useCallback, useMemo} from "react";

interface UseOptionProps<Value> {
    value: Value,
    option: OptionType<Value>,
    onChange: (value: Value) => void,
}

export const useOption = <T> ({ value, option, onChange }: UseOptionProps<T>) => {
    const isChecked = useMemo(() => value === option.value, [option.value, value]);

    const handleOnChange = useCallback(() => {
        onChange(option.value);
    }, [onChange, option.value]);

    return { isChecked, handleOnChange };
};

interface UseMultipleOptionProps<Value> {
    values: Value[],
    option: OptionType<Value>,
    onChange: (values: Value[]) => void,
}

export const useMultipleOption = <T> ({ values, option, onChange }: UseMultipleOptionProps<T>) => {
    const isChecked = useMemo(() => values.includes(option.value), [option.value, values]);

    const handleOnChange = useCallback(() => {
        if (isChecked) {
            onChange(values.filter(value => option.value !== value));
        } else {
            onChange([ ...values, option.value ]);
        }
    }, [isChecked, onChange, option.value, values]);

    return { isChecked, handleOnChange };
};