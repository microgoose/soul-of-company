import {ToDownArrow} from "@/shared/assets";
import styles from './SequenceLinkArrow.module.scss';

export const SequenceLinkArrow = () => {
    return (
        <div className={styles.linkArrow}>
            <ToDownArrow/>
        </div>
    );
};