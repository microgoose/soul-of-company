import logo from "@/shared/assets/image/logo-88x94.webp";
import {routesConfig} from "@/shared/config/routes-config.ts";
import {t} from "i18next";
import {NavLink} from "react-router-dom";
import styles from './DefaultLogo.module.scss';

export const DefaultLogo = () => {
    return (
        <NavLink to={routesConfig.homePage.path} className={styles.logo}>
            <img className={styles.logoImage} src={logo} alt={t('projectName')}/>
            <span>{t('projectName')}</span>
        </NavLink>
    );
};