import {OptionsType, SelectValue} from "@/shared/ui/select";
import {SelectTag} from "@/shared/ui/select/ui/tag-select/select-tag/SelectTag.tsx";
import {useCallback, useMemo} from "react";

interface SelectTagProps<T extends SelectValue> {
    value: T[],
    options: OptionsType<T>,
    onChange: (value: T[]) => void,
}

export const SelectTags = <T extends SelectValue,> ({ value, options, onChange}: SelectTagProps<T>) => {
    const selectedOptions = useMemo(() => options
        .filter(option => value.includes(option.value)), [options, value]);

    const handleOnRemove = useCallback((removable: T) => {
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