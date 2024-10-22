import {SecondaryButton} from "@/shared/ui/button";
import {t} from "i18next";
import {PlusIcon} from "@/shared/assets";
import style from './AddUserButton.module.scss';

export const AddUserButton = () => {
    return (
        <SecondaryButton className={style.addUserButton}>
            <span>{t('usersManagement.addUser')}</span>
            <PlusIcon/>
        </SecondaryButton>
    );
};