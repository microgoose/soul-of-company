import {useCallback, useMemo} from "react";
import {OptionType, OptionValueType} from "@/shared/ui/select";

interface UseOptionProps {
    value: OptionValueType[],
    option: OptionType,
    onChange: (value: OptionValueType[]) => void,
}

export const useOption = ({ value, option, onChange }: UseOptionProps) => {
    const isChecked = useMemo(() => value.includes(option.value), [option.value, value]);

    const handleOnChange = useCallback(() => {
        onChange([option.value]);
    }, [onChange, option.value]);

    return { isChecked, handleOnChange };
};

export const useMultipleOption = ({ value, option, onChange }: UseOptionProps) => {
    const isChecked = useMemo(() => value.includes(option.value), [option.value, value]);

    const handleOnChange = useCallback(() => {
        if (isChecked) {
            onChange(value.filter(item => option.value !== item));
        } else {
            onChange([ ...value, option.value ]);
        }
    }, [isChecked, onChange, option.value, value]);

    return { isChecked, handleOnChange };
};