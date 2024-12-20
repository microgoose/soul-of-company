import {useForm, UseFormReturn} from "react-hook-form";
import {TemperatureMessage} from "@/shared/types/entities";
import {TemperatureMessagesFieldsType} from "@/entities/mailing";

export interface UseEditTemperatureMessagesForm {
    methods: UseFormReturn<TemperatureMessagesFieldsType>
}

export const useEditTemperatureMessagesForm = (temperatureMessages: TemperatureMessage[]): UseEditTemperatureMessagesForm => {
    const methods = useForm<TemperatureMessagesFieldsType>({
        mode: 'onChange',
        defaultValues: {
            messages: temperatureMessages,
        }
    });

    return { methods };
}