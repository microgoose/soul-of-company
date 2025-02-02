import {RotateLeftStreamLine} from "@/shared/assets";
import {SecondaryButton} from "@/shared/ui/button";
import {t} from "i18next";
import styles from './DiadocApiLegendAction.module.scss';

interface UpdateDiadocApiConfigFormProps {
    onSubmit: () => void,
}

export const DiadocApiFormLegend = ({onSubmit}: UpdateDiadocApiConfigFormProps) => {
    return (
        <>
            <span>{t('mailing.diadocApiSettings')}</span>
            <SecondaryButton className={styles.diadocApiLegendActionButton} onClick={onSubmit}>
                <RotateLeftStreamLine/>
                {t('actions.refresh')}
            </SecondaryButton>
        </>
    );
};