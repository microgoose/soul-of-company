import {CheckboxOption} from "./CheckboxOption.tsx";
import {OptionType, OptionValueType} from "@/shared/ui/select";

interface CheckboxOptionsProps {
    value: OptionValueType[],
    options: OptionType[],
    onChange: (value: OptionValueType[]) => void
}

export const CheckboxOptions = ({ value, options, onChange }: CheckboxOptionsProps) => {
    return (
        <>
            {options.map(option =>
                <CheckboxOption
                    key={option.value}
                    value={value}
                    option={option}
                    onChange={onChange}
                />
            )}
        </>
    );
};