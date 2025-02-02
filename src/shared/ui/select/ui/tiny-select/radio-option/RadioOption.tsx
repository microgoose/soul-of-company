import {OptionType} from "@/shared/ui/select/model/select.types.ts";
import {useOption} from "@/shared/ui/select/model/use-option.ts";
import classNames from "classnames";
import styles from "./RadioOption.module.scss";

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