import styles from './UserTelegramIdActivity.module.scss';
import {ReactNode} from "react";
import classNames from "classnames";

interface UserTelegramIdActivityProps {
    children: ReactNode,
    isActive: boolean
}

export const UserTelegramIdActivity = ({isActive, children}: UserTelegramIdActivityProps) => {
    const activityCircleClasses =
        classNames(isActive? [styles.activityCircle, styles.isActive] : styles.activityCircle);

    return (
        <span className={styles.userTelegramIdActivity}>
            <i className={activityCircleClasses}/>
            {children}
        </span>
    );
};