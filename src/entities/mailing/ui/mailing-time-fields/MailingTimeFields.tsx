import {Input} from "@/shared/ui/input";
import {OptionsType, TinySelect} from "@/shared/ui/select";
import {t} from "i18next";
import {Controller, useFormContext} from "react-hook-form";

type Props = {
    timeZoneOptions: OptionsType<number>,
}

export interface MailingTimeFieldsType {
    timeZone: number,
    startTime: string,
    endTime: string,
}

export const MailingTimeFields = ({ timeZoneOptions }: Props) => {
    const { control, formState: { errors } } = useFormContext<MailingTimeFieldsType>();

    return (
        <>
            <Controller name='timeZone' control={control} render={({field}) =>
                <TinySelect
                    label={t('mailingTimeConfig.label.timeZone')}
                    error={errors?.timeZone?.message}
                    placeholder={t('mailingTimeConfig.actions.enterTimeZone')}
                    options={timeZoneOptions}
                    value={field.value}
                    onChange={field.onChange}
                />
            }/>

            <Controller name='startTime' control={control} render={({field}) =>
                <Input
                    type='time'
                    error={errors?.startTime?.message}
                    label={t('mailingTimeConfig.label.startTime')}
                    placeholder={t('mailingTimeConfig.actions.enterStartTime')}
                    {...field}
                />
            }/>

            <Controller name='endTime' control={control} render={({field}) =>
                <Input
                    type='time'
                    error={errors?.endTime?.message}
                    label={t('mailingTimeConfig.label.endTime')}
                    placeholder={t('mailingTimeConfig.actions.enterEndTime')}
                    {...field}
                />
            }/>
        </>
    );
};