import {SecondaryButton} from "@/shared/ui/button";
import {t} from "i18next";

export const AddUserButton = () => {
    return (
        <SecondaryButton>
            {t('addUser')}
        </SecondaryButton>
    );
};