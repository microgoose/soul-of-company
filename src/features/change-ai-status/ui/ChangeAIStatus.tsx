import {useToggleAiApi} from "@/entities/ai";
import {AiApi} from "@/shared/types/entities";
import {ButtonSize, ButtonState, EmptyButton} from "@/shared/ui/button";
import {ButtonRadius} from "@/shared/ui/button/model/button-radius.ts";
import {StatusTag, TagStatus} from "@/shared/ui/status-tag";
import {t} from "i18next";
import styles from './ChangeAIStatus.module.scss';

type Props = {
    aiApi: AiApi;
};

export const ChangeAiStatus = ({ aiApi }: Props) => {
    const {activate, deactivate, isLoading} = useToggleAiApi();
    let actionText = t('AiApi.actions.enable');
    let status = TagStatus.ERROR;
    let statusTitle = t('AiApi.state.notActive');

    if (aiApi.isActive) {
        status = TagStatus.DONE;
        statusTitle = t('AiApi.state.isActive');
        actionText = t('AiApi.actions.disable');
    }

    if (isLoading) {
        status = TagStatus.IN_PROGRESS;
        statusTitle = t('AiApi.state.pending');
    }

    const onChange = () => {
        if (aiApi.isActive) {
            deactivate(aiApi);
        } else {
            activate(aiApi);
        }
    };

    return (
        <div className={styles.changeAiStatus}>
            <StatusTag status={status} title={statusTitle}/>
            <EmptyButton
                size={ButtonSize.SMALL}
                radius={ButtonRadius.SMALL}
                state={isLoading? ButtonState.DISABLED : ButtonState.DEFAULT}
                onClick={onChange}
            >
                {actionText}
            </EmptyButton>
        </div>
    );
};