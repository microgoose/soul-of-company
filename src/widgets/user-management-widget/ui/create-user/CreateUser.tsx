import {SecondaryButton} from "@/shared/ui/button";
import {t} from "i18next";
import {PlusIcon} from "@/shared/assets";
import style from './CreateUser.module.scss';

interface AddUserButtonProps {
    onClick?: () => void;
}

export const CreateUser = ({ onClick }: AddUserButtonProps) => {
    return (
        <SecondaryButton className={style.addUserButton} onClick={onClick}>
            <span>{t('usersManagement.addUser')}</span>
            <PlusIcon/>
        </SecondaryButton>
    );
};