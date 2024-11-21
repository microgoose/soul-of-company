import {RadioOption} from "./RadioOption.tsx";
import {OptionType, OptionValueType} from "@/shared/ui/select";

interface RadioOptionsProps {
    value: OptionValueType[],
    options: OptionType[],
    onChange: (value: OptionValueType[]) => void
}

export const RadioOptions = ({ value, options, onChange }: RadioOptionsProps) => {
    return (
        <>
            {options.map(option =>
                <RadioOption
                    key={option.value}
                    value={value}
                    option={option}
                    onChange={onChange}
                />
            )}
        </>
    );
};