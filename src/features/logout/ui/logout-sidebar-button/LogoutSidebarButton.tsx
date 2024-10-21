import classNames from "classnames";
import styles from "./LogoutSidebarButton.module.scss";
import {LoginIcon} from "@/shared/assets";
import {t} from "i18next";
import {FC} from "react";
import {IconButton} from "@/shared/ui/button";

interface LogoutSidebarButtonProps {
    isCollapsed?: boolean
}

export const LogoutSidebarButton: FC<LogoutSidebarButtonProps> = ({isCollapsed}) => {
    if (isCollapsed) {
        return (
            <IconButton tooltip={t('logOut')} className={styles.logout}>
                <LoginIcon/>
            </IconButton>
        )
    }

    return (
        <div className={classNames(styles.logoutSidebarButton, styles.logout)}>
            <LoginIcon/>
            <span>{t('logOut')}</span>
        </div>
    );
};