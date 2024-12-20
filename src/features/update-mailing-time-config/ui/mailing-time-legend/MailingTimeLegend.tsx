import {SecondaryButton} from "@/shared/ui/button";
import {t} from "i18next";
import {RotateLeftStreamLine} from "@/shared/assets";
import styles from './MailingTimeLegend.module.scss';

interface Props {
    onSubmit: () => void,
}

export const MailingTimeLegend = ({onSubmit}: Props) => {
    return (
        <>
            <span>{t('mailing.mailingTime')}</span>
            <SecondaryButton className={styles.diadocApiLegendActionButton} onClick={onSubmit}>
                <RotateLeftStreamLine/>
                {t('actions.refresh')}
            </SecondaryButton>
        </>
    );
};