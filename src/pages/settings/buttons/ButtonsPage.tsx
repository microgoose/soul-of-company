import {t} from "i18next";
import {useDocumentTitle} from "@/shared/hooks/use-document-title.ts";

export const ButtonsPage = () => {
    useDocumentTitle(t('pages.buttons.title'));

    return (
            <div/>
    );
};