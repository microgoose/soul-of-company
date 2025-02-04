import {AiConfigFields} from "@/entities/ai";
import {NewAIConfig} from "@/shared/types/entities";
import {ButtonState, PrimaryButton} from "@/shared/ui/button";
import {t} from "i18next";
import {UseFormReturn} from "react-hook-form";
import styles from './AddAiConfigForm.module.scss';

type Props = {
    form: UseFormReturn<NewAIConfig>,
    onSubmit: () => void,
}

export const AddAiConfigForm = ({ form, onSubmit }: Props) => {
    return (
        <div className={styles.addAiConfigForm}>
            <AiConfigFields form={form} />

            <PrimaryButton
                state={form.formState.isValid ? ButtonState.DEFAULT : ButtonState.DISABLED}
                onClick={onSubmit}
            >
                {t('actions.add')}
            </PrimaryButton>
        </div>
    );
}