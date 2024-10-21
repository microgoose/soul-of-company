import classNames from "classnames";
import {
    ContactIcon,
    DollarCoin,
    EmployeeTreeIcon,
    GearWheelIcon,
    LayoutWindowIcon,
    NotificationIcon
} from '@/shared/assets';
import styles from './MainSidebarWidget.module.scss';
import {DefaultLogo, LogoImage} from "@/entities/logo";
import {t} from "i18next";
import {routes} from "@/app/router.tsx";
import {useState} from "react";
import {RouteItem} from "../route-item/RouteItem.tsx";
import {LogoutSidebarButton} from "@/features/logout";


export const MainSidebarWidget = () => {
    const [isCollapsed] = useState(false);
    const logo = isCollapsed? <LogoImage className={styles.logoImage}/> : <DefaultLogo/>;

    return (
        <aside className={isCollapsed? classNames(styles.mainSidebar, styles.collapsed) : styles.mainSidebar}>
            <header className={styles.headerSection}>
                {logo}
            </header>
            <section className={styles.desktopSection}>
                <RouteItem
                    path={routes.desktopPage.path}
                    icon={<LayoutWindowIcon/>}
                    text={t('pages.desktop.title')}
                    isCollapsed={isCollapsed}
                />
            </section>
            <section className={styles.bottomSection}>
                <div>
                    <RouteItem
                        path={routes.usersPage.path}
                        icon={<ContactIcon/>}
                        text={t('pages.users.title')}
                        isCollapsed={isCollapsed}
                    />
                    <RouteItem
                        path={routes.rolesPage.path}
                        icon={<EmployeeTreeIcon/>}
                        text={t('pages.roles.title')}
                        isCollapsed={isCollapsed}
                    />
                    <RouteItem
                        path={routes.accountsPage.path}
                        icon={<DollarCoin/>}
                        text={t('pages.accounts.title')}
                        isCollapsed={isCollapsed}
                    />
                    <RouteItem
                        path={routes.remindersPage.path}
                        icon={<NotificationIcon/>}
                        text={t('pages.reminders.title')}
                        isCollapsed={isCollapsed}
                    />
                </div>

                <div>
                    <RouteItem
                        path={routes.settingsPage.path}
                        icon={<GearWheelIcon/>}
                        text={t('pages.settings.title')}
                        isCollapsed={isCollapsed}
                    />
                    <LogoutSidebarButton isCollapsed={isCollapsed}/>
                </div>
            </section>
        </aside>
    );
};