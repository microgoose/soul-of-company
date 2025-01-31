import {t} from "i18next";
import {Submenu, SubmenuItem} from "@/shared/ui/submenu";
import {ButtonState, EmptyButton} from "@/shared/ui/button";
import styles from './SidebarSettingsSubmenu.module.scss';
import {NavLink, useMatch} from "react-router-dom";
import {GearWheelIcon} from "@/shared/assets";
import {SidebarItem} from "@/widgets/main-sidebar-widget/ui/sidebar-item/SidebarItem.tsx";
import {useCallback, useMemo, useState} from "react";
import {routesConfig} from "@/shared/config/routes-config.ts";

interface SidebarSettingsSubmenuProps {
    isCollapsed: boolean,
    onOpen: () => void,
}

export const SidebarSettingsSubmenu = ({isCollapsed, onOpen}: SidebarSettingsSubmenuProps) => {
    const [isOpened, setIsOpened] = useState(false);
    const isSettingsPage = useMatch('/settings/*') !== null;

    const onSidebarItemClick = useCallback(() => {
        if (isCollapsed) {
            onOpen();
        }

        setIsOpened(!isOpened);
    }, [isCollapsed, isOpened, onOpen]);

    const navButton = useCallback((isActive: boolean, text: string) => (
        <EmptyButton className={styles.button} state={isActive? ButtonState.ACTIVE : undefined}>
            {text}
        </EmptyButton>
    ), []);

    const sidebarItem = useMemo(() => (
        <SidebarItem
            icon={<GearWheelIcon />}
            text={t('mainSidebar.settings')}
            isCollapsed={isCollapsed}
            isActive={isSettingsPage || isOpened}
            onClick={onSidebarItemClick}
        />
    ), [isCollapsed, isSettingsPage, isOpened, onSidebarItemClick]);

    if (isCollapsed) {
        return sidebarItem;
    }

    return (
        <Submenu isOpened={isOpened} button={sidebarItem} listClasses={styles.submenuList}>
            <SubmenuItem>
                <NavLink to={routesConfig.settingsButtonsPage.path}>
                    {({isActive}) => navButton(isActive, t('pages.buttons.title'))}
                </NavLink>
            </SubmenuItem>
            <SubmenuItem>
                <NavLink to={routesConfig.settingsChainPage.path}>
                    {({isActive}) => navButton(isActive, t('pages.chain.title'))}
                </NavLink>
            </SubmenuItem>
            <SubmenuItem>
                <NavLink to={routesConfig.settingsCitiesPage.path}>
                    {({isActive}) => navButton(isActive, t('pages.cities.title'))}
                </NavLink>
            </SubmenuItem>
            <SubmenuItem>
                <NavLink to={routesConfig.settingsMailingPage.path}>
                    {({isActive}) => navButton(isActive, t('pages.mailing.title'))}
                </NavLink>
            </SubmenuItem>
            <SubmenuItem>
                <NavLink to={routesConfig.settingsOpenAIPage.path}>
                    {({isActive}) => navButton(isActive, t('pages.AISettings.title'))}
                </NavLink>
            </SubmenuItem>
        </Submenu>
    );
};