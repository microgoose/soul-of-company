import {OptionType} from "@/shared/ui/select/model/select.types.ts";
import {useOption} from "@/shared/ui/select/model/use-option.ts";
import {OptionLabel} from "@/shared/ui/select/ui/tag-select/option-label/OptionLabel.tsx";
import classNames from "classnames";
import styles from "./RadioOption.module.scss";

interface SelectOptionProps<T> {
    value: T,
    option: OptionType<T>,
    onChange: (value: T) => void
}

export const RadioOption = <T,> (props: SelectOptionProps<T>) => {
    const { option } = props;
    const { isChecked, handleOnChange } = useOption(props);

    return (
        <div className={classNames(styles.optionContainer, {[styles.isChecked]: isChecked})}>
            <div className={styles.option} title={option.label}>
                <OptionLabel option={option} />
                <input type='radio' onChange={handleOnChange} checked={isChecked} />
            </div>
        </div>
    );
};