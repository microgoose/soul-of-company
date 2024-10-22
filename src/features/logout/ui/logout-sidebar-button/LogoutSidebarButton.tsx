import styles from "./LogoutSidebarButton.module.scss";
import {LoginIcon} from "@/shared/assets";
import {t} from "i18next";
import {FC} from "react";
import {CenteredButton, IconButton} from "@/shared/ui/button";
import classNames from "classnames";

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
        <CenteredButton className={classNames(styles.button, styles.logout)}>
            <LoginIcon/>
            <span>{t('logOut')}</span>
        </CenteredButton>
    );
};