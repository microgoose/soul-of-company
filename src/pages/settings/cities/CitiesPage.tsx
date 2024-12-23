import {t} from "i18next";
import {useDocumentTitle} from "@/shared/hooks/use-document-title.ts";

export const CitiesPage = () => {
    useDocumentTitle(t('pages.cities.title'));

    return (
            <div/>
    );
};