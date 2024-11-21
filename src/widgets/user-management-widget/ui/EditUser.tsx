import {IconButton} from "@/shared/ui/button";
import {t} from "i18next";
import {PencilIcon} from "@/shared/assets";

interface EditUserProps {
    onClick: () => void,
}

export const EditUser = ({ onClick }: EditUserProps) => {
    return (
        <IconButton tooltip={t('actions.edit')} onClick={onClick}>
            <PencilIcon/>
        </IconButton>
    );
};