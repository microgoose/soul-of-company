import {LayoutWindowIcon} from "@/shared/assets";
import {ButtonState, ButtonType, IconButton, TextButton} from "@/shared/ui/button";
import {t} from "i18next";
import {useCallback} from "react";
import styles from './CollapseSidebarButton.module.scss';

interface CollapseSidebarButton {
    isCollapsed: boolean,
    onChange: (isCollapsed: boolean) => void
}

export const CollapseSidebarButton = ({isCollapsed, onChange}: CollapseSidebarButton) => {
    const changeCollapsed = useCallback(() => {
        onChange(!isCollapsed);
    }, [isCollapsed, onChange]);
    
    if (isCollapsed) {
        return (
            <IconButton
                type={ButtonType.EMPTY}
                tooltip={t('mainSidebar.desktop')}
                state={isCollapsed? ButtonState.ACTIVE : ButtonState.DEFAULT}
                onClick={changeCollapsed}
            >
                <LayoutWindowIcon/>
            </IconButton>
        );
    }

    return (
        <TextButton onClick={changeCollapsed} className={styles.button}>
            <LayoutWindowIcon/>
            <span>{t('mainSidebar.desktop')}</span>
        </TextButton>
    );
};