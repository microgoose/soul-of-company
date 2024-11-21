import {CrossIcon} from "@/shared/assets";
import styles from './SelectTag.module.scss';
import {OptionType, OptionValueType} from "@/shared/ui/select";
import {useCallback} from "react";

interface SelectTagProps {
    option: OptionType,
    onRemove: (option: OptionValueType) => void,
}

export const SelectTag = ({ option, onRemove }: SelectTagProps) => {
    const handleOnRemove = useCallback(() => onRemove(option.value), [onRemove, option]);
    
    return (
        <div className={styles.selectTagContainer}>
            <span className={styles.tagLabel}>
                {option.label}
            </span>
            <button className={styles.removeTag} onClick={handleOnRemove}>
                <CrossIcon/>
            </button>
        </div>
    );
}