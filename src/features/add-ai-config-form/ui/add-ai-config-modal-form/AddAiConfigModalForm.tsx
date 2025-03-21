import {useSaveAiConfig} from "@/entities/ai";
import {getAddAiConfigValidationSchema} from "@/entities/ai/model/ai-config-validation-schema.ts";
import {useAiConfigModalForm} from "@/features/add-ai-config-form";
import {NewAIConfig} from "@/shared/types/entities";
import {DoneStage, ModalForm, StageForm} from "@/shared/ui/form";
import {yupResolver} from "@hookform/resolvers/yup";
import {t} from "i18next";
import {useCallback} from "react";
import {useForm} from "react-hook-form";
import {AddAiConfigForm} from "../add-ai-config-form/AddAiConfigForm.tsx";

export const AddAiConfigModalForm = () => {
    const {isOpen, stage, nextStage, close} = useAiConfigModalForm();
    const aiConfigSaver = useSaveAiConfig();
    const form = useForm<NewAIConfig>({
        mode: 'onChange',
        resolver: yupResolver<NewAIConfig>(getAddAiConfigValidationSchema()),
        defaultValues: {
            apiKey: '',
            model: '',
            tokens: 0,
        },
    });

    const onSubmit = useCallback(async (aiConfig: NewAIConfig) => {
        nextStage();
        await aiConfigSaver.save(aiConfig);
        close();
    }, [aiConfigSaver, close, nextStage]);
    
    return (
        <ModalForm title={t('AiApi.actions.addAi')} isOpen={isOpen} onClose={close}>
            <StageForm stage={stage} stages={[
                <AddAiConfigForm form={form} onSubmit={form.handleSubmit(onSubmit)}/>,
                <DoneStage message={t('AIConfig.message.aiConfigAdded')}/>
            ]}/>
        </ModalForm>
    );
}