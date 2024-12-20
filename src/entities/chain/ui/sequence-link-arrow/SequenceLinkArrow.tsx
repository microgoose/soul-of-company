import styles from './SequenceLinkArrow.module.scss';
import {ToDownArrow} from "@/shared/assets";

export const SequenceLinkArrow = () => {
    return (
        <div className={styles.linkArrow}>
            <ToDownArrow/>
        </div>
    );
};