import {AiApiTabs} from "@/widgets/ai-api-tabs-widget";
import {t} from "i18next";
import {useDocumentTitle} from "@/shared/hooks/use-document-title.ts";
import {HeaderDividerPage} from "@/shared/layout";
import styles from './AISettings.module.scss';

export const AISettings = () => {
    useDocumentTitle(t('pages.AISettings.title'));

    return (
        <HeaderDividerPage title={t('pages.AISettings.fullTitle')} className={styles.aiSettingsPage}>
            <AiApiTabs/>
        </HeaderDividerPage>
    );
};