import styles from "./CheckboxOption.module.scss";
import {OptionType, OptionValueType} from "@/shared/ui/select";
import classNames from "classnames";
import {CheckMark} from "@/shared/assets";
import {useMultipleOption} from "@/shared/ui/select/model/use-option.ts";

interface CheckboxOptionProps {
    value: OptionValueType[],
    option: OptionType,
    onChange: (value: OptionValueType[]) => void,
}

export const CheckboxOption = (props: CheckboxOptionProps) => {
    const { option } = props;
    const { isChecked, handleOnChange } = useMultipleOption(props);
    
    return (
        <div className={classNames(styles.option, {[styles.isChecked]: isChecked})} title={option.label}>
            <span>{option.label}</span>
            <button className={styles.checkbox} onClick={handleOnChange}>
                {isChecked && <CheckMark/>}
            </button>
        </div>
    );
};