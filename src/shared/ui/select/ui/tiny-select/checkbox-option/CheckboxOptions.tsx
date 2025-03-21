import {OptionsType} from "@/shared/ui/select";
import {CheckboxOption} from "./CheckboxOption.tsx";

interface Props<Value> {
    values: Value[];
    options: OptionsType<Value>;
    onChange: (value: Value[]) => void
}

export const CheckboxOptions = <T,> ({ values, options, onChange }: Props<T>) => {
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