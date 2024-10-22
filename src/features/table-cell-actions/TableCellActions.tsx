import styles from './TableCellActions.module.scss';
import {IconButton} from "@/shared/ui/button";
import {t} from "i18next";
import {BasketIcon, PencilIcon} from "@/shared/assets";

export const TableCellActions = () => {
    return (
        <div className={styles.editCell}>
            <IconButton tooltip={t('actions.edit')}>
                <PencilIcon/>
            </IconButton>
            <IconButton tooltip={t('actions.delete')}>
                <BasketIcon/>
            </IconButton>
        </div>
    );
};