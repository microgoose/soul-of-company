import {CrossIcon, Magnifier} from "@/shared/assets";
import styles from "./SelectSearch.module.scss";
import {ChangeEvent, useCallback, useState} from "react";
import classNames from "classnames";

interface SelectSearchProps {
    className?: string,
    onChange: (key: string) => void
}

export const SelectSearch = ({ className, onChange }: SelectSearchProps) => {
    const [value, setValue] = useState('');

    const handleOnChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        onChange(e.target.value);
    }, [onChange]);

    const handleOnClear = useCallback(() => {
        setValue('');
        onChange('');
    }, [onChange]);
    
    return (
        <label className={classNames(styles.search, className)}>
            <Magnifier/>
            <input value={value} onChange={handleOnChange}/>
            {value && <CrossIcon className={styles.closeIcon} onClick={handleOnClear}/>}
        </label>
    );
};