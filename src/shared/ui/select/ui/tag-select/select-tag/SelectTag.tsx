import {CrossIcon} from "@/shared/assets";
import styles from './SelectTag.module.scss';
import {OptionType, SelectValue} from "@/shared/ui/select";
import {useCallback} from "react";

interface SelectTagProps<T extends SelectValue> {
    option: OptionType<T>,
    onRemove: (value: T) => void,
}

export const SelectTag = <T extends SelectValue,> ({ option, onRemove }: SelectTagProps<T>) => {
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