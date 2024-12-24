import {t} from "i18next";
import {useDocumentTitle} from "@/shared/hooks/use-document-title.ts";
import {DividerTitle} from "@/shared/ui/divider-title";
import styles from "./ButtonsPage.module.scss";
import {ButtonsWidgetTable} from "@/widgets/edit-buttons-widget";

export const ButtonsPage = () => {
    useDocumentTitle(t('pages.buttons.title'));

    return (
        <div>
            <DividerTitle title={t('pages.buttons.title')} className={styles.pageTitle}/>
            <div className={styles.contentContainer}>
                <ButtonsWidgetTable/>
            </div>
        </div>
    );
};