import {MailingTimeFields, MailingTimeFieldsType} from "@/entities/mailing";
import {getTimeZoneById} from "@/entities/time-zone";
import {useUpdateMailingTimeForm} from "@/features/update-mailing-time-config/model/use-update-mailing-time-form.ts";
import {MailingTimeLegend} from "@/features/update-mailing-time-config/ui/mailing-time-legend/MailingTimeLegend.tsx";
import {MailingTimeConfig} from "@/shared/types/entities";
import {Fieldset} from "@/shared/ui/fieldset";
import {t} from "i18next";
import {useCallback} from "react";
import {FormProvider} from "react-hook-form";

type Props = {
    mailingTypeConfig: MailingTimeConfig,
    onSubmit: (mailingTypeConfig: MailingTimeConfig) => void
}

export const MailingTimeForm = (props: Props) => {
    const { methods, timeZonesOptions } = useUpdateMailingTimeForm(props.mailingTypeConfig);

    const onSubmit = useCallback(async (values: MailingTimeFieldsType) => {
        const timeZone = await getTimeZoneById(values.timeZone);

        if (!timeZone)
            throw new Error(t('timeZone.errors.timeZoneNotFound') + ': ' + values.timeZone);

        const mailingTypeConfig: MailingTimeConfig = {
            timeZone,
            startTime: values.startTime,
            endTime: values.endTime,
        };

        props.onSubmit(mailingTypeConfig);
    }, [props]);

    return (
        <FormProvider {...methods}>
            <Fieldset legend={<MailingTimeLegend onSubmit={methods.handleSubmit(onSubmit)}/>}>
                <MailingTimeFields timeZoneOptions={timeZonesOptions}/>
            </Fieldset>
        </FormProvider>
    );
};