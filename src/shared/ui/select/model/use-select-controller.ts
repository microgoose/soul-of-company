import {OptionType, OptionValueType} from "@/shared/ui/select";
import {useCallback, useState} from "react";

interface UseSelectControllerProps {
    multiple?: boolean,
    value: OptionValueType[],
    options: OptionType[],
    onChange?: (value: OptionValueType[]) => void,
}

export interface SelectController {
    value: OptionValueType[],
    visibleOptions: OptionType[],
    options: OptionType[],
    multiple: boolean,
    handleOnFilter: (key: string) => void,
    handleOnChange: (value: OptionValueType[]) => void,
}

const toToken = (str: string) => str.trim().toLowerCase().replace(/ /g, '');

export const useSelectController = (props: UseSelectControllerProps): SelectController => {
    const { multiple = false, value, options, onChange } = props;
    const [visibleOptions, setVisibleOptions] = useState(options);

    const handleOnChange = useCallback((newValue: OptionValueType[]) => {
        onChange?.(newValue);
    }, [onChange]);

    const handleOnFilter = useCallback((key: string) => {
        if (!key) {
            setVisibleOptions(options);
            return;
        }

        const token = toToken(key);

        setVisibleOptions(options
            // .map(option => {
            //     const labelToken = toToken(option.label);
            //     const startIndex = labelToken.indexOf(token);
            //
            //     if (startIndex !== -1) {
            //         const endIndex = startIndex + token.length + 1;
            //         return {
            //             ...option,
            //             highlighted: option.label.substring(startIndex, endIndex),
            //         };
            //     }
            //
            //     return { ...option, highlighted: undefined };
            // })
            // .filter(option => option.highlighted)
            .filter(option => option.label.match(token))
        );
    }, [options]);

    return { value, options, visibleOptions, multiple, handleOnFilter, handleOnChange };
}