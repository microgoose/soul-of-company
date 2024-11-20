import {t} from "i18next";
import {useDocumentTitle} from "@/shared/hooks/use-document-title.ts";

export const ChainPage = () => {
    useDocumentTitle(t('pages.chain.title'));

    return (
            <div/>
    );
};