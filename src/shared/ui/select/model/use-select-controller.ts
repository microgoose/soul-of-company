import {useCallback, useEffect, useState} from "react";
import {OptionsType, SelectValue} from "@/shared/ui/select";

interface UseSelectControllerProps<T extends SelectValue> {
    value: T | T[];
    options: OptionsType<T>;
    onChange?: (value: T | T[]) => void;
}

export interface SelectController<T extends SelectValue> {
    value: T | T[];
    visibleOptions: OptionsType<T>;
    options: OptionsType<T>;
    handleOnFilter: (key: string) => void;
    handleOnChange: (value: T | T[]) => void;
}

const toToken = (str: string) => str.trim().toLowerCase().replace(/ /g, "");

export const useSelectController = <T extends SelectValue> (props: UseSelectControllerProps<T>): SelectController<T> => {
    const { value, options, onChange } = props;
    const [visibleOptions, setVisibleOptions] = useState<OptionsType<T>>(options);

    const handleOnChange = useCallback(
        (newValue: T | T[]) => onChange?.(newValue),
        [onChange]
    );

    const handleOnFilter = useCallback(
        (key?: string) => {
            if (!key) {
                setVisibleOptions(options);
                return;
            }

            const token = toToken(key);
            const newOptions = options.filter(option =>
                option.label.toLowerCase().includes(token)
            );

            setVisibleOptions(newOptions);
        },
        [options]
    );

    useEffect(() => {
        handleOnFilter();
    }, [handleOnFilter]);
    
    return { value, options, visibleOptions, handleOnFilter, handleOnChange };
};