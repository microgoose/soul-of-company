import {TemperatureMessage} from "@/shared/types/entities";
import {yupResolver} from "@hookform/resolvers/yup";
import {useEffect} from "react";
import {useForm, UseFormReturn} from "react-hook-form";
import {getTemperatureMessagesValidationScheme} from "./get-temperature-messages-validation-scheme.ts";

export interface TemperatureMessageFieldsType {
    minTemperature: number,
    maxTemperature: number,
    message: string,
}

export const useTemperatureMessageForm = (temperatureMessage?: TemperatureMessage): UseFormReturn<TemperatureMessageFieldsType> => {
    const form = useForm<TemperatureMessageFieldsType>({
        mode: 'onChange',
        resolver: yupResolver<TemperatureMessageFieldsType>(getTemperatureMessagesValidationScheme()),
        values: temperatureMessage
    });

    const minT = form.watch('minTemperature');
    const maxT = form.watch('maxTemperature');

    useEffect(() => {
        if (minT && maxT) {
            form.trigger('minTemperature');
            form.trigger('maxTemperature');
        }
    }, [form, minT, maxT]);

    return form;
}