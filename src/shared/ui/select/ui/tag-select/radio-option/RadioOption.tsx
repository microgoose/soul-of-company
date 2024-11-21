import styles from "./RadioOption.module.scss";
import {OptionType, OptionValueType} from "@/shared/ui/select/model/select.types.ts";
import classNames from "classnames";
import {useOption} from "@/shared/ui/select/model/use-option.ts";
import {OptionLabel} from "@/shared/ui/select/ui/tag-select/option-label/OptionLabel.tsx";

interface SelectOptionProps {
    value: OptionValueType[],
    option: OptionType,
    onChange: (value: OptionValueType[]) => void,
}

export const RadioOption = (props: SelectOptionProps) => {
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