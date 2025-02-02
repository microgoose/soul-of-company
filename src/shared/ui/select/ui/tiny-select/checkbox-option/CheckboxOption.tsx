import {CheckMark} from "@/shared/assets";
import {OptionType} from "@/shared/ui/select";
import {useMultipleOption} from "@/shared/ui/select/model/use-option.ts";
import classNames from "classnames";
import styles from "./CheckboxOption.module.scss";

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
                {isChecked && <CheckMark className={styles.checkMark}/>}
            </button>
        </div>
    );
};