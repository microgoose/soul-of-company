import {CheckboxOption} from "./CheckboxOption.tsx";
import {OptionsType} from "@/shared/ui/select";

interface CheckboxOptionsProps<T> {
    values: T[],
    options: OptionsType<T>,
    onChange: (value: T[]) => void
}

export const CheckboxOptions = <T,> ({ values, options, onChange }: CheckboxOptionsProps<T>) => {
    return (
        <>
            {options.map((option, index) =>
                <CheckboxOption
                    key={index}
                    values={values}
                    option={option}
                    onChange={onChange}
                />
            )}
        </>
    );
};