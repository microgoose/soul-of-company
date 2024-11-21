import {useMemo, useState} from "react";
import styles from "./TinySelect.module.scss";
import {FieldClassState, FieldError, FieldLabel, InputProperties} from "@/shared/ui/field";
import {ChevronDown} from "@/shared/assets";
import {OptionType, OptionValueType} from "@/shared/ui/select";
import {useSelectFieldState} from "../../model/use-select-field-state.ts";
import {useSelectController} from "../../model/use-select-controller.ts";
import {CheckboxOptions} from "./checkbox-option/CheckboxOptions.tsx";
import {RadioOptions} from "./radio-option/RadioOptions.tsx";
import {OuterClick} from "@/shared/ui/outer-click";
import {useAutoScroll} from "@/shared/hooks/use-auto-scroll.ts";
import classNames from "classnames";
import {Popover, PositionState} from "@/shared/ui/popover";

interface TinySelectProps extends InputProperties {
    label?: string;
    error?: string;
    value: OptionValueType[];
    options: OptionType[];
    multiple?: boolean;
    autoScroll?: boolean
    onChange?: (value: OptionValueType[]) => void;
}

export const TinySelect = (props: TinySelectProps) => {
    const {label, error, multiple, autoScroll = true, placeholder} = props;
    const {fieldState, close, toggle} = useSelectFieldState(props);
    const {value, options, visibleOptions, handleOnChange} = useSelectController(props);
    const inputValue = useMemo(() => options
        .filter(option => value.includes(option.value))
        .map(option => option.label)
        .join(','), [options, value]);

    const selectFieldRef = useAutoScroll(autoScroll && fieldState.isActive);
    const [optionsPosition, setOptionsPosition] = useState<PositionState>();
    const fieldClassState = useMemo(() => classNames({
        [styles.isOptionsBelow]: optionsPosition === PositionState.IS_BELOW,
        [styles.isOptionsAbove]: optionsPosition === PositionState.IS_ABOVE,
    }), [optionsPosition]);

    return (
        <FieldClassState fieldState={fieldState} styles={styles} className={fieldClassState}>
            {label && <FieldLabel>{label}</FieldLabel>}

            <OuterClick onOuterClick={close} className={styles.selectField} start={fieldState.isActive} ref={selectFieldRef}>
                <button className={styles.selectButton} onClick={toggle}>
                    <span>{inputValue ? inputValue : placeholder}</span>
                    <ChevronDown className={styles.toggleIcon}/>
                </button>

                <Popover
                    isOpen={fieldState.isActive}
                    className={styles.selectOptionsContainer}
                    target={selectFieldRef}
                    onPosition={setOptionsPosition}
                >
                    {multiple ?
                        <CheckboxOptions value={value} options={visibleOptions} onChange={handleOnChange}/> :
                        <RadioOptions value={value} options={visibleOptions} onChange={handleOnChange}/>}
                </Popover>
            </OuterClick>

            {error && <FieldError>{error}</FieldError>}
        </FieldClassState>
    );
};