import {FC} from "react";
import {t} from "i18next";
import logo from '@/shared/assets/image/logo-88x94.webp';
import {NavLink} from "react-router-dom";
import {routes} from "@/app/router.tsx";

interface LogoImageProps {
    className?: string
}

export const LogoImage: FC<LogoImageProps> = ({ className = '' }) => {
    return (
        <NavLink to={routes.homePage.path}>
            <img className={className} src={logo} alt={t('projectName')}/>
        </NavLink>
    );
};