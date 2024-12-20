import styles from "./RadioOption.module.scss";
import {OptionType} from "@/shared/ui/select/model/select.types.ts";
import classNames from "classnames";
import {useOption} from "@/shared/ui/select/model/use-option.ts";

interface Props<Value> {
    value: Value,
    option: OptionType<Value>,
    onChange: (value: Value) => void
}

export const RadioOption = <T,> (props: Props<T>) => {
    const { option } = props;
    const { isChecked, handleOnChange } = useOption(props);

    return (
        <div className={classNames(styles.option, {[styles.isChecked]: isChecked})} title={option.label}>
            {option.label}
            <input type='radio' onChange={handleOnChange} checked={isChecked} />
        </div>
    );
};