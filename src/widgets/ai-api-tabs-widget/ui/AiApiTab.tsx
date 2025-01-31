import {AiHistoryTable, AiApiFields} from "@/entities/ai";
import {AIConfig, AIHistory} from "@/shared/types/entities";
import {t} from "i18next";
import styles from './AiApiTab.module.scss';

type Props = {
    isLoading: boolean;
    aiConfig: AIConfig | undefined,
    aiHistory: AIHistory[]
}

export const AiApiTab = ({isLoading, aiConfig, aiHistory}: Props) => {
    return (
        <div className={styles.apiAiTab}>
            {isLoading && <span>{t('loading')}</span>}

            <div className={styles.aiConfigFields}>
                {aiConfig && <AiApiFields defaultValues={aiConfig}/>}
            </div>

            <AiHistoryTable openAiHistory={aiHistory}/>
        </div>
    );
};