import {useForm} from "react-hook-form";
import {MailingTimeFieldsType} from "@/entities/mailing";
import {getAllTimeZones} from "@/entities/time-zone";
import {MailingTimeConfig} from "@/shared/types/entities";
import {yupResolver} from "@hookform/resolvers/yup";
import {
    getMailingTimeValidationScheme
} from "@/features/update-mailing-time-config/model/get-mailing-time-validation-scheme.ts";
import {useQuery} from "@tanstack/react-query";

export const useUpdateMailingTimeForm = (mailingTypeConfig: MailingTimeConfig) => {
    const {data: timeZonesOptions = [], isLoading} = useQuery({
        queryKey: ['timeZonesOptions'],
        queryFn: () => getAllTimeZones().then(timeZones => timeZones.map(timeZone => ({
            value: timeZone.id,
            label: `${timeZone.city} (${timeZone.zone})`,
        })))
    });

    const methods = useForm<MailingTimeFieldsType>({
        mode: 'onChange',
        resolver: yupResolver<MailingTimeFieldsType>(getMailingTimeValidationScheme()),
        defaultValues: {
            startTime: mailingTypeConfig.startTime,
            endTime: mailingTypeConfig.endTime,
            timeZone: mailingTypeConfig.timeZone.id,
        }
    });
    
    return { isLoading, timeZonesOptions, methods };
}