import {t} from "i18next";
import {useDocumentTitle} from "@/shared/hooks/use-document-title.ts";

export const OpenAIPage = () => {
    useDocumentTitle(t('pages.openAI.title'));

    return (
            <div/>
    );
};