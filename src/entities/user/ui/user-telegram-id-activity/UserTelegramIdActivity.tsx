import classNames from "classnames";
import {ReactNode} from "react";
import styles from './UserTelegramIdActivity.module.scss';

interface UserTelegramIdActivityProps {
    children: ReactNode,
    disabled?: boolean,
    isActive: boolean
}

export const UserTelegramIdActivity = ({isActive, children, disabled}: UserTelegramIdActivityProps) => {
    const activityCircleClasses = classNames(styles.activityCircle, {
        [styles.isActive]: isActive && !disabled,
        [styles.disabled]: disabled
    });

    return (
        <span className={styles.userTelegramIdActivity}>
            <i className={activityCircleClasses}/>
            {children}
        </span>
    );
};