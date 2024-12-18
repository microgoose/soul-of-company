import styles from './SequenceLinkArrow.module.scss';
import {LeftToRightArrow} from "@/shared/assets";

export const SequenceLinkArrow = () => {
    return (
        <div className={styles.linkArrow}>
            <LeftToRightArrow/>
        </div>
    );
};