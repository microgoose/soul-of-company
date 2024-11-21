import styles from './TagSelect.module.scss';
import {FieldClassState, FieldError, FieldLabel, InputProperties} from "@/shared/ui/field";
import {OptionType, OptionValueType} from "@/shared/ui/select";
import {useSelectFieldState} from "@/shared/ui/select/model/use-select-field-state.ts";
import {useSelectController} from "@/shared/ui/select/model/use-select-controller.ts";
import {ChevronDown} from "@/shared/assets";
import {SelectSearch} from "@/shared/ui/select/ui/tag-select/search/SelectSearch.tsx";
import {SelectTags} from "@/shared/ui/select/ui/tag-select/select-tag/SelectTags.tsx";
import {TinyScrollbarContainer} from "@/shared/ui/scrollbar";
import {CheckboxOptions} from "@/shared/ui/select/ui/tag-select/checkbox-option/CheckboxOptions.tsx";
import {RadioOptions} from "@/shared/ui/select/ui/tag-select/radio-option/RadioOptions.tsx";
import {OuterClick} from '@/shared/ui/outer-click';
import {useAutoScroll} from "@/shared/hooks/use-auto-scroll.ts";
import {useCallback, useMemo, useState} from "react";
import {Popover, PositionState} from "@/shared/ui/popover";
import classNames from "classnames";

interface SelectProps extends InputProperties {
    label?: string,
    error?: string,
    value: OptionValueType[],
    options: OptionType[],
    multiple?: boolean,
    search?: boolean,
    autoScroll?: boolean
    onChange?: (value: OptionValueType[]) => void,
}

export const TagSelect = (props: SelectProps) => {
    const {label, error, autoScroll = true, placeholder, multiple} = props;
    const {fieldState, open, close, toggle} = useSelectFieldState(props);
    const [optionsPosition, setOptionsPosition] = useState<PositionState>();
    const {value, options, visibleOptions, handleOnChange, handleOnFilter} = useSelectController(props);
    const selectFieldRef = useAutoScroll(autoScroll && fieldState.isActive);

    const fieldClassState = useMemo(() => classNames({
        [styles.tagSelectContainer]: true,
        [styles.isOptionsBelow]: optionsPosition === PositionState.IS_BELOW,
        [styles.isOptionsAbove]: optionsPosition === PositionState.IS_ABOVE,
    }), [optionsPosition]);
    
    const handleOnTagsContainerClick = useCallback(() => {
        if (!fieldState.isActive) open();
    }, [fieldState.isActive, open]);

    return (
        <FieldClassState fieldState={fieldState} styles={styles} className={fieldClassState}>
            {label && <FieldLabel>{label}</FieldLabel>}

            <OuterClick onOuterClick={close} className={styles.selectField} start={fieldState.isActive} ref={selectFieldRef}>
                <div className={styles.tagsContainer} onClick={handleOnTagsContainerClick}>
                    <div className={styles.selectTags}>
                        {value.length?
                            <SelectTags value={value} options={options} onChange={handleOnChange} /> :
                            placeholder}
                    </div>

                    <ChevronDown className={styles.toggleIcon} onClick={toggle}/>
                </div>

                <Popover
                    isOpen={fieldState.isActive}
                    className={styles.selectOptionsContainer}
                    target={selectFieldRef}
                    onPosition={setOptionsPosition}
                >
                    <SelectSearch className={styles.selectSearch} onChange={handleOnFilter}/>

                    <TinyScrollbarContainer className={styles.selectOptions}>
                        {multiple?
                            <CheckboxOptions value={value} options={visibleOptions} onChange={handleOnChange}/> :
                            <RadioOptions value={value} options={visibleOptions} onChange={handleOnChange}/>}
                    </TinyScrollbarContainer>
                </Popover>
            </OuterClick>

            {error && <FieldError>{error}</FieldError>}
        </FieldClassState>
    );
};