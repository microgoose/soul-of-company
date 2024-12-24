import {t} from "i18next";
import {useDocumentTitle} from "@/shared/hooks/use-document-title.ts";
import {ButtonsWidgetTable} from "@/widgets/edit-buttons-widget";
import {HeaderDividerPage} from "@/layout";
import styles from './ButtonsPage.module.scss';

export const ButtonsPage = () => {
    useDocumentTitle(t('pages.buttons.title'));

    return (
        <HeaderDividerPage title={t('pages.buttons.title')} className={styles.buttonsPage}>
            <ButtonsWidgetTable/>
        </HeaderDividerPage>
    );
};