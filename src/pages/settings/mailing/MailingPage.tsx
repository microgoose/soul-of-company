import {useDiadocApiFieldsController, useMailingTimeController} from "@/entities/mailing";
import {UpdateDiadocApiConfigForm} from "@/features/update-diadoc-api-config";
import {MailingTimeForm} from "@/features/update-mailing-time-config";
import {useDocumentTitle} from "@/shared/hooks/use-document-title.ts";
import {Page, PageHeader, PageTitle} from "@/shared/layout";
import {EditWeatherNotification} from "@/widgets/edit-weather-notification-widget";
import {t} from "i18next";
import {useEffect, useMemo} from "react";
import styles from './MailingPage.module.scss';

//todo decompose, refactoring
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
        <Page>
            <PageHeader>
                <PageTitle>{t('pages.mailing.title')}</PageTitle>
            </PageHeader>
            <div className={styles.topForms}>
                {mailingTypeForm}
                {diadocForm}
            </div>
            <EditWeatherNotification/>
        </Page>
    );
};