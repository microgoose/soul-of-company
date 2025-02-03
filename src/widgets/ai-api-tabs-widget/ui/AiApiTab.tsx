import {AiApiFields, AiHistoryTable} from "@/entities/ai";
import {ChangeAiStatus} from "@/features/change-ai-status";
import {AiApi, AIConfig, AIHistory} from "@/shared/types/entities";
import {t} from "i18next";
import styles from './AiApiTab.module.scss';

type Props = {
    isLoading: boolean;
    aiApi: AiApi | undefined,
    aiConfig: AIConfig | undefined,
    aiHistory: AIHistory[]
}

export const AiApiTab = ({isLoading, aiApi, aiConfig, aiHistory}: Props) => {
    return (
        <>
            {isLoading && <span>{t('loading')}</span>}

            <div className={styles.aiConfigFields}>
                {aiConfig && <AiApiFields defaultValues={aiConfig}/>}
                {aiApi && <ChangeAiStatus aiApi={aiApi}/>}
            </div>

            <AiHistoryTable openAiHistory={aiHistory}/>
        </>
    );
};