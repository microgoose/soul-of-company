import styles from "./RadioOption.module.scss";
import {OptionType, OptionValueType} from "@/shared/ui/select/model/select.types.ts";
import classNames from "classnames";
import {useOption} from "@/shared/ui/select/model/use-option.ts";

interface SelectOptionProps {
    value: OptionValueType[],
    option: OptionType,
    onChange: (value: OptionValueType[]) => void,
}

export const RadioOption = (props: SelectOptionProps) => {
    const { option } = props;
    const { isChecked, handleOnChange } = useOption(props);

    return (
        <div className={classNames(styles.option, {[styles.isChecked]: isChecked})} title={option.label}>
            {option.label}
            <input type='radio' onChange={handleOnChange} checked={isChecked} />
        </div>
    );
};