import {useForm, UseFormReturn} from "react-hook-form";
import {TemperatureMessage} from "@/shared/types/entities";
import {TemperatureMessagesFieldsType} from "@/entities/mailing";
import {yupResolver} from "@hookform/resolvers/yup";
import {
    getTemperatureMessagesValidationScheme
} from "@/features/edit-temperature-messages-form/model/get-temperature-messages-validation-scheme.ts";

export interface UseEditTemperatureMessagesForm {
    methods: UseFormReturn<TemperatureMessagesFieldsType>
}

export const useEditTemperatureMessagesForm = (temperatureMessages: TemperatureMessage[]): UseEditTemperatureMessagesForm => {
    const methods = useForm<TemperatureMessagesFieldsType>({
        mode: 'onChange',
        resolver: yupResolver<TemperatureMessagesFieldsType>(getTemperatureMessagesValidationScheme()),
        defaultValues: {
            messages: temperatureMessages,
        }
    });

    return { methods };
}