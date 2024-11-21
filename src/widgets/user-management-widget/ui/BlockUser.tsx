import {IconButton} from "@/shared/ui/button";
import {t} from "i18next";
import {BasketIcon} from "@/shared/assets";

interface BlockUserProps {
    onClick: () => void,
}

export const BlockUser = ({ onClick }: BlockUserProps) => {
    return (
        <IconButton tooltip={t('actions.block')} onClick={onClick}>
            <BasketIcon/>
        </IconButton>
    );
};