import {AiConfigRowFields, AiHistoryTable} from "@/entities/ai";
import {ChangeAiStatus} from "@/features/change-ai-status";
import {AiApi, AIConfig, AIHistory, NewAIConfig} from "@/shared/types/entities";
import {useForm} from "react-hook-form";
import styles from './AiApiTab.module.scss';

type Props = {
    aiApi: AiApi | undefined,
    aiConfig: AIConfig | undefined,
    aiHistory: AIHistory[]
}

export const AiApiTab = ({aiApi, aiConfig, aiHistory}: Props) => {
    const form = useForm<NewAIConfig>({
        mode: 'onChange',
        values: aiConfig || {
            tokens: 0,
            apiKey: '',
            model: '',
        },
    });

    return (
        <>
            <div className={styles.aiConfigFields}>
                <AiConfigRowFields form={form}/>
                {aiApi && <ChangeAiStatus aiApi={aiApi}/>}
            </div>

            <AiHistoryTable openAiHistory={aiHistory}/>
        </>
    );
};