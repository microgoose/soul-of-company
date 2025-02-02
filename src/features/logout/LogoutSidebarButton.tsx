import {LoginIcon} from "@/shared/assets";
import {IconButton, SimpleButton} from "@/shared/ui/button";
import classNames from "classnames";
import {t} from "i18next";
import {FC} from "react";
import styles from "./LogoutSidebarButton.module.scss";

interface LogoutSidebarButtonProps {
    isCollapsed?: boolean
}

export const LogoutSidebarButton: FC<LogoutSidebarButtonProps> = ({isCollapsed}) => {
    if (isCollapsed) {
        return (
            <IconButton tooltip={t('actions.logOut')} className={styles.logout}>
                <LoginIcon/>
            </IconButton>
        )
    }

    return (
        <SimpleButton className={classNames(styles.button, styles.logout)}>
            <LoginIcon/>
            <span>{t('actions.logOut')}</span>
        </SimpleButton>
    );
};