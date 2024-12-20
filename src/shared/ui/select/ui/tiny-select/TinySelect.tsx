import {useMemo, useState} from "react";
import styles from "./TinySelect.module.scss";
import {FieldClassState, FieldError, FieldLabel, InputProperties} from "@/shared/ui/field";
import {ChevronDown} from "@/shared/assets";
import {OptionsType, SelectValue} from "@/shared/ui/select";
import {useSelectFieldState} from "../../model/use-select-field-state.ts";
import {useSelectController} from "../../model/use-select-controller.ts";
import {CheckboxOptions} from "./checkbox-option/CheckboxOptions.tsx";
import {RadioOptions} from "./radio-option/RadioOptions.tsx";
import {OuterClick} from "@/shared/ui/outer-click";
import {useAutoScroll} from "@/shared/hooks/use-auto-scroll.ts";
import classNames from "classnames";
import {Popover, PositionState} from "@/shared/ui/popover";

interface TinySelectProps<T extends SelectValue> extends InputProperties {
    className?: string,
    label?: string;
    error?: string;
    value: T | T[];
    options: OptionsType<T>;
    autoScroll?: boolean
    onChange?: (value: T | T[]) => void;
}

export const TinySelect = <T extends SelectValue,> (props: TinySelectProps<T>) => {
    const {label, error, autoScroll = true, placeholder, className} = props;
    const {fieldState, close, toggle} = useSelectFieldState(props);
    const {value, options, visibleOptions, handleOnChange} = useSelectController(props);
    const inputValue = useMemo(() => options
            .filter(option => Array.isArray(value)? value.includes(option.value) : value === option.value)
            .map(option => option.label)
            .join(','), [options, value]);

    const selectFieldRef = useAutoScroll(autoScroll && fieldState.isActive);
    const [optionsPosition, setOptionsPosition] = useState<PositionState>();
    const fieldClassState = useMemo(() => classNames(className, {
        [styles.isOptionsBelow]: optionsPosition === PositionState.IS_BELOW,
        [styles.isOptionsAbove]: optionsPosition === PositionState.IS_ABOVE,
    }), [className, optionsPosition]);

    return (
        <FieldClassState fieldState={fieldState} styles={styles} className={fieldClassState}>
            {label && <FieldLabel>{label}</FieldLabel>}

            <OuterClick onOuterClick={close} className={styles.selectField} start={fieldState.isActive} ref={selectFieldRef}>
                <button className={styles.selectButton} onClick={toggle} title={inputValue || placeholder}>
                    <span>{inputValue ? inputValue : placeholder}</span>
                    <ChevronDown className={styles.toggleIcon}/>
                </button>

                <Popover
                    isOpen={fieldState.isActive}
                    className={styles.selectOptionsContainer}
                    target={selectFieldRef}
                    onPosition={setOptionsPosition}
                >
                    {Array.isArray(value) ?
                        <CheckboxOptions values={value} options={visibleOptions} onChange={handleOnChange}/> :
                        <RadioOptions value={value} options={visibleOptions} onChange={handleOnChange}/>}
                </Popover>
            </OuterClick>

            {error && <FieldError>{error}</FieldError>}
        </FieldClassState>
    );
};