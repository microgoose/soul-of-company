import styles from "./CheckboxOption.module.scss";
import {OptionType} from "@/shared/ui/select";
import classNames from "classnames";
import {CheckMark} from "@/shared/assets";
import {useMultipleOption} from "@/shared/ui/select/model/use-option.ts";
import {OptionLabel} from "@/shared/ui/select/ui/tag-select/option-label/OptionLabel.tsx";

interface CheckboxOptionProps<T> {
    values: T[],
    option: OptionType<T>,
    onChange: (value: T[]) => void
}

export const CheckboxOption = <T,> (props: CheckboxOptionProps<T>) => {
    const { option } = props;
    const { isChecked, handleOnChange } = useMultipleOption<T>(props);
    
    return (
        <div className={classNames(styles.optionContainer, {[styles.isChecked]: isChecked})}>
            <div className={styles.option} title={option.label}>
                <OptionLabel option={option} />

                <button className={styles.checkbox} onClick={handleOnChange}>
                    {isChecked && <CheckMark className={styles.checkMark}/>}
                </button>
            </div>
        </div>
    );
};