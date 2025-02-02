import {OptionsType} from "@/shared/ui/select";
import {RadioOption} from "./RadioOption.tsx";

interface RadioOptionsProps<T> {
    value: T,
    options: OptionsType<T>,
    onChange: (value: T) => void
}

export const RadioOptions = <T,> ({ value, options, onChange }: RadioOptionsProps<T>) => {
    return (
        <>
            {options.map((option, index) =>
                <RadioOption
                    key={index}
                    value={value}
                    option={option}
                    onChange={onChange}
                />
            )}
        </>
    );
};