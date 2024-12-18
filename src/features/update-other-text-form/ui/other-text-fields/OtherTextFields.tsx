import {t} from "i18next";
import {Input} from "@/shared/ui/input";
import {UseOtherTextForm} from "@/features/update-other-text-form";

interface OtherTextFieldsProps {
    form: UseOtherTextForm,
}

export const OtherTextFields = ({ form }: OtherTextFieldsProps) => {
    const { values, errors = {}, onChange } = form;
    
    return (
        <>
            <Input
                error={errors.afterAccountCreatedText?.message}
                label={t('chain.afterAccountCreatedText')}
                value={values.afterAccountCreatedText}
                onChange={(value) => onChange('afterAccountCreatedText', value as string)}
            />

            <Input
                error={errors.mainMenuText?.message}
                label={t('chain.mainMenuText')}
                value={values.mainMenuText}
                onChange={(value) => onChange('mainMenuText', value as string)}
            />

            <Input
                error={errors.afterAccountSentText?.message}
                label={t('chain.afterAccountSentText')}
                value={values.afterAccountSentText}
                onChange={(value) => onChange('afterAccountSentText', value as string)}
            />
        </>
    );
};