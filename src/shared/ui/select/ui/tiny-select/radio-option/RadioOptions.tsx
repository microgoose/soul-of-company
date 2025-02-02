import {OptionsType} from "@/shared/ui/select";
import {RadioOption} from "./RadioOption.tsx";

interface Props<Value> {
    value: Value,
    options: OptionsType<Value>,
    onChange: (value: Value) => void
}

export const RadioOptions = <T,> ({ value, options, onChange }: Props<T>) => {
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