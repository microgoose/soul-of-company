import {useAiConfigModalForm} from "@/features/add-ai-config-form";
import {PlusIcon} from "@/shared/assets";
import {SecondaryButton} from "@/shared/ui/button";
import {t} from "i18next";
import style from './AddAiConfigButton.module.scss';

export const AddAiConfigButton = () => {
    const {open} = useAiConfigModalForm();

    return (
        <SecondaryButton className={style.addEntityButton} onClick={open}>
            <span>{t('AiApi.actions.addAi')}</span>
            <PlusIcon/>
        </SecondaryButton>
    );
};