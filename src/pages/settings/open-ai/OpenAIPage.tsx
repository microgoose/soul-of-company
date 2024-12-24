import {t} from "i18next";
import {useDocumentTitle} from "@/shared/hooks/use-document-title.ts";
import styles from "./OpenAI.module.scss";
import {HeaderDividerPage, TableContainer} from "@/layout";
import {getOpenAIConfig, getOpenAIHistory, OpenAiFields, OpenAiHistoryTable} from "@/entities/open-ai";
import {useQuery} from "@tanstack/react-query";

export const OpenAIPage = () => {
    useDocumentTitle(t('pages.openAI.title'));

    const { data: openAiConfig } = useQuery({
        queryKey: ['openAiConfig'],
        queryFn: () => getOpenAIConfig()
    });
    const { data: openAiHistory = [] } = useQuery({
        queryKey: ['openAiHistory'],
        queryFn: () => getOpenAIHistory()
    });

    return (
        <HeaderDividerPage title={t('pages.openAI.title')} className={styles.openAIPage}>
            <div className={styles.openAiFields}>
                {openAiConfig && <OpenAiFields defaultValues={openAiConfig}/>}
            </div>
            <TableContainer>
                <OpenAiHistoryTable openAiHistory={openAiHistory}/>
            </TableContainer>
        </HeaderDividerPage>
    );
};