import {t} from "i18next";
import {useDocumentTitle} from "@/shared/hooks/use-document-title.ts";
import {DividerTitle} from "@/shared/ui/divider-title";
import styles from './MailingPage.module.scss';
import {UpdateDiadocApiConfigForm} from "@/features/update-diadoc-api-config";
import {useDiadocApiFieldsController, useMailingTimeController} from "@/entities/mailing";
import {useEffect, useMemo} from "react";
import {MailingTimeForm} from "@/features/update-mailing-time-config";
import {EditWeatherNotification} from "@/widgets/edit-weather-notification-widget";

export const MailingPage = () => {
    useDocumentTitle(t('pages.mailing.title'));

    const diadocApiConfigController = useDiadocApiFieldsController();
    const mailingTimeController = useMailingTimeController();

    useEffect(() => {
        diadocApiConfigController.load();
        mailingTimeController.load();
    }, []);

    const diadocForm = useMemo(() => {
        if (diadocApiConfigController.diadocApiConfig) {
            return (
                <UpdateDiadocApiConfigForm
                    diadocApiCofig={diadocApiConfigController.diadocApiConfig}
                    onSubmit={diadocApiConfigController.update}
                />
            );
        }

        return <span>{t('loading')}</span>;
    }, [diadocApiConfigController.diadocApiConfig, diadocApiConfigController.update]);

    const mailingTypeForm = useMemo(() => {
        if (mailingTimeController.mailingTime) {
            return (
                <MailingTimeForm 
                    mailingTypeConfig={mailingTimeController.mailingTime} 
                    onSubmit={mailingTimeController.update}
                />
            );
        }

        return <span>{t('loading')}</span>;
    }, [mailingTimeController.mailingTime, mailingTimeController.update]);

    return (
        <div className={styles.pageContainer}>
            <DividerTitle title={t('pages.mailing.title')}/>
            <div className={styles.topForms}>
                {mailingTypeForm}
                {diadocForm}
            </div>
            <EditWeatherNotification/>
        </div>
    );
};