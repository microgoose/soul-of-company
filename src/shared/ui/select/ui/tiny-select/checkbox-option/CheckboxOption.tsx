import styles from "./CheckboxOption.module.scss";
import {OptionType} from "@/shared/ui/select";
import classNames from "classnames";
import {CheckMark} from "@/shared/assets";
import {useMultipleOption} from "@/shared/ui/select/model/use-option.ts";

interface Props<Value> {
    values: Value[];
    option: OptionType<Value>;
    onChange: (values: Value[]) => void
}

export const CheckboxOption = <T,> (props: Props<T>) => {
    const { option } = props;
    const { isChecked, handleOnChange } = useMultipleOption<T>(props);
    
    return (
        <div className={classNames(styles.option, {[styles.isChecked]: isChecked})} title={option.label}>
            <span>{option.label}</span>
            <button className={styles.checkbox} onClick={handleOnChange}>
                {isChecked && <CheckMark/>}
            </button>
        </div>
    );
};