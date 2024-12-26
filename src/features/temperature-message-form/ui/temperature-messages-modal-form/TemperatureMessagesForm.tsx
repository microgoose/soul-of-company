import {FormProvider} from "react-hook-form";
import {TemperatureMessage} from "@/shared/types/entities";
import {TemperatureMessageFields} from "@/entities/mailing/ui/temperature-message-fields/TemperatureMessageFields.tsx";
import {DoneStage, ModalForm, StageForm} from "@/shared/ui/form";
import {t} from "i18next";
import {useCallback, useEffect, useState} from "react";
import {TemperatureMessageFieldsType, useTemperatureMessageForm} from "@/features/temperature-message-form";
import {ButtonState, PrimaryButton} from "@/shared/ui/button";
import styles from "./TemperatureMessagesForm.module.scss";

type Props = {
    title: string,
    submitText: string,
    isOpen: boolean,
    message?: TemperatureMessage,
    onSubmit: (message?: TemperatureMessage) => void,
}

export const TemperatureMessagesForm = ({title, submitText, isOpen, message, onSubmit}: Props) => {
    const form = useTemperatureMessageForm(message);
    const [temperatureMessage, setTemperatureMessage] = useState<TemperatureMessageFieldsType | null>(null);
    const [stage, setStage] = useState(0);

    const handleSubmit = useCallback((fieldsValues: TemperatureMessageFieldsType) => {
        setTemperatureMessage(null);
        form.reset();
        onSubmit({
            ...fieldsValues,
            id: null,
        });
    }, [form, onSubmit]);

    const handleClose = useCallback(() => {
        if (temperatureMessage) {
            onSubmit({
                ...temperatureMessage,
                id: null,
            });
            setTemperatureMessage(null);
        } else {
            onSubmit();
        }
    }, [temperatureMessage, onSubmit]);

    useEffect(() => {
        if (stage == 1 && temperatureMessage) {
            setTimeout(() => handleClose(), 2000);
        }
    }, [temperatureMessage, handleClose, stage]);

    useEffect(() => {
        if (isOpen) {
            form.reset();
            setStage(0);
        }
    }, [isOpen]);

    return (
        <ModalForm title={title} isOpen={isOpen} onClose={onSubmit} scrollable={false}>
            <StageForm stage={stage} stages={[
                <FormProvider {...form}>
                    <fieldset className={styles.temperatureMessageFields}>
                        <TemperatureMessageFields/>
                        <PrimaryButton
                            state={form.formState.isValid ? ButtonState.DEFAULT : ButtonState.DISABLED}
                            className={styles.submitButton}
                            onClick={form.handleSubmit(handleSubmit)}
                        >
                            {submitText}
                        </PrimaryButton>
                    </fieldset>
                </FormProvider>,

                <DoneStage message={t('forms.roleAuthoritiesUpdated')}/>
            ]}/>
        </ModalForm>
    );
};