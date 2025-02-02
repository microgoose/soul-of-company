import {OtherTexts} from "@/shared/types/entities";
import {Input} from "@/shared/ui/input";
import {t} from "i18next";
import {Controller, UseFormReturn} from "react-hook-form";

interface OtherTextFieldsProps {
    form: UseFormReturn<OtherTexts>,
}

export const OtherTextFields = ({form}: OtherTextFieldsProps) => {
    const {control, formState: {errors}} = form;

    return (
        <>
            <Controller name={`afterAccountCreatedText`} control={control} render={({field}) =>
                <Input
                    error={errors?.afterAccountCreatedText?.message}
                    label={t('chain.afterAccountCreatedText')}
                    value={field.value}
                    onChange={field.onChange}
                />
            }/>

            <Controller name={`mainMenuText`} control={control} render={({field}) =>
                <Input
                    error={errors?.mainMenuText?.message}
                    label={t('chain.mainMenuText')}
                    value={field.value}
                    onChange={field.onChange}
                />
            }/>

            <Controller name={`afterAccountSentText`} control={control} render={({field}) =>
                <Input
                    error={errors?.afterAccountSentText?.message}
                    label={t('chain.afterAccountSentText')}
                    value={field.value}
                    onChange={field.onChange}
                />
            }/>
        </>
    );
};