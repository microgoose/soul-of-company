import {t} from "i18next";
import styles from './DefaultLogo.module.scss';
import logo from "@/shared/assets/image/logo-88x94.webp";
import {routesConfig} from "@/shared/config/routes-config.ts";
import {NavLink} from "react-router-dom";

export const DefaultLogo = () => {
    return (
        <NavLink to={routesConfig.homePage.path} className={styles.logo}>
            <img className={styles.logoImage} src={logo} alt={t('projectName')}/>
            <span>{t('projectName')}</span>
        </NavLink>
    );
};