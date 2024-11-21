import {OptionType, OptionValueType} from "@/shared/ui/select";
import {SelectTag} from "@/shared/ui/select/ui/tag-select/select-tag/SelectTag.tsx";
import {useCallback, useMemo} from "react";

interface SelectTagProps {
    value: OptionValueType[],
    options: OptionType[],
    onChange: (value: OptionValueType[]) => void,
}

export const SelectTags = ({ value, options, onChange}: SelectTagProps) => {
    const selectedOptions = useMemo(() => options
        .filter(option => value.includes(option.value)), [options, value]);

    const handleOnRemove = useCallback((removable: OptionValueType) => {
        onChange(value.filter(val => removable !== val));
    }, [onChange, value]);
    
    return (
        <>
            {selectedOptions.map((option, i) => 
                <SelectTag 
                    key={i} 
                    option={option}
                    onRemove={handleOnRemove}
                />
            )}
        </>
    );
}