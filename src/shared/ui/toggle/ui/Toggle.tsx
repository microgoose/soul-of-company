import styles from './Toggle.module.scss';
import {useCallback} from "react";

interface ToggleProps {
    checked: boolean,
    onChange: (checked: boolean) => void
}

export const Toggle = ({ checked, onChange }: ToggleProps) => {
    const handleOnChange = useCallback(() => {
        onChange(!checked);
    }, [checked, onChange]);
    
    return (
        <label className={styles.toggle}>
            <input type="checkbox" checked={checked} onChange={handleOnChange}/>
            <span className={styles.slider}/>
        </label>
    );
}