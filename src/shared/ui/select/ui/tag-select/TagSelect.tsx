import {ChevronDown} from "@/shared/assets";
import {useAutoScroll} from "@/shared/hooks/use-auto-scroll.ts";
import {FieldClassState, FieldError, FieldLabel, InputProperties} from "@/shared/ui/field";
import {OuterClick} from '@/shared/ui/outer-click';
import {Popover, PositionState} from "@/shared/ui/popover";
import {TinyScrollbarContainer} from "@/shared/ui/scrollbar";
import {OptionsType, SelectValue} from "@/shared/ui/select";
import {useSelectController} from "@/shared/ui/select/model/use-select-controller.ts";
import {useSelectFieldState} from "@/shared/ui/select/model/use-select-field-state.ts";
import {CheckboxOptions} from "@/shared/ui/select/ui/tag-select/checkbox-option/CheckboxOptions.tsx";
import {RadioOptions} from "@/shared/ui/select/ui/tag-select/radio-option/RadioOptions.tsx";
import {SelectSearch} from "@/shared/ui/select/ui/tag-select/search/SelectSearch.tsx";
import {SelectTags} from "@/shared/ui/select/ui/tag-select/select-tag/SelectTags.tsx";
import classNames from "classnames";
import {useCallback, useMemo, useState} from "react";
import styles from './TagSelect.module.scss';

interface TaSelectProps<T extends SelectValue> extends InputProperties {
    label?: string,
    error?: string,
    value: T | T[],
    options: OptionsType<T>,
    search?: boolean,
    autoScroll?: boolean
    onChange?: (value: T | T[]) => void,
}

export const TagSelect = <T extends SelectValue,> (props: TaSelectProps<T>) => {
    const {label, error, autoScroll = true, placeholder} = props;
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
    
    const selectRenderer = useMemo(() => {
        if (Array.isArray(value)) {
            if (value.length) {
                return <SelectTags value={value} options={options} onChange={handleOnChange} />;
            } else {
                return placeholder;
            }
        } else {
            if (value) {
                return <SelectTags value={[value]} options={options} onChange={handleOnChange} />;
            } else {
                return placeholder;
            }
        }
    }, [handleOnChange, options, placeholder, value]);

    return (
        <FieldClassState fieldState={fieldState} styles={styles} className={fieldClassState}>
            {label && <FieldLabel>{label}</FieldLabel>}

            <OuterClick onOuterClick={close} className={styles.selectField} start={fieldState.isActive} ref={selectFieldRef}>
                <TinyScrollbarContainer className={styles.tagsContainer} onClick={handleOnTagsContainerClick}>
                    <div className={styles.selectTags}>
                        {selectRenderer}
                    </div>

                    <ChevronDown className={styles.toggleIcon} onClick={toggle}/>
                </TinyScrollbarContainer>

                <Popover
                    isOpen={fieldState.isActive}
                    className={styles.selectOptionsContainer}
                    target={selectFieldRef}
                    onPosition={setOptionsPosition}
                >
                    <SelectSearch className={styles.selectSearch} onChange={handleOnFilter}/>

                    <TinyScrollbarContainer className={styles.selectOptions}>
                        {Array.isArray(value)?
                            <CheckboxOptions values={value} options={visibleOptions} onChange={handleOnChange}/> :
                            <RadioOptions value={value} options={visibleOptions} onChange={handleOnChange}/>}
                    </TinyScrollbarContainer>
                </Popover>
            </OuterClick>

            {error && <FieldError>{error}</FieldError>}
        </FieldClassState>
    );
};