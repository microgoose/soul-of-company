import {useForm} from "react-hook-form";
import {MailingTimeFieldsType} from "@/entities/mailing";
import {useEffect, useMemo, useState} from "react";
import {getAllTimeZones} from "@/entities/time-zone";
import {MailingTimeConfig, TimeZone} from "@/shared/types/entities";

export const useUpdateMailingTimeForm = (mailingTypeConfig: MailingTimeConfig) => {
    const [isLoading, setIsLoading] = useState(false);
    const [timeZones, setTimeZones] = useState<TimeZone[]>([]);
    
    const timeZonesOptions = useMemo(() => {
        return timeZones.map(timeZone => ({
            value: timeZone.id,
            label: `${timeZone.city} (${timeZone.zone})`,
        }));
    }, [timeZones]);

    const methods = useForm<MailingTimeFieldsType>({
        mode: 'onChange',
        defaultValues: {
            startTime: mailingTypeConfig.startTime,
            endTime: mailingTypeConfig.endTime,
            timeZone: mailingTypeConfig.timeZone.id,
        }
    });

    useEffect(() => {
        setIsLoading(true);
        getAllTimeZones()
            .then(setTimeZones)
            .finally(() => setIsLoading(false));
    }, []);
    
    return { isLoading, timeZonesOptions, methods };
}