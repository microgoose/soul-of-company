import {RotateLeftStreamLine} from "@/shared/assets";
import {SecondaryButton} from "@/shared/ui/button";
import {t} from "i18next";
import styles from './WeatherNotificationLegend.module.scss';

interface Props {
    onSubmit?: () => void,
}

export const WeatherNotificationLegend = ({onSubmit}: Props) => {
    return (
        <>
            <span>{t('mailing.weatherNotification')}</span>
            <SecondaryButton className={styles.diadocApiLegendActionButton} onClick={onSubmit}>
                <RotateLeftStreamLine/>
                {t('actions.refresh')}
            </SecondaryButton>
        </>
    );
};