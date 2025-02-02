import {
    getConferenceTimeValidationScheme
} from "@/features/update-conference-time-form/model/get-conference-time-validation-scheme.ts";
import {ConferenceTime} from "@/shared/types/entities";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm, UseFormReturn} from "react-hook-form";

export interface UseUpdateConferenceTimeForm {
    methods:  UseFormReturn<ConferenceTime>
}

export const useUpdateConferenceTimeForm = (config: ConferenceTime): UseUpdateConferenceTimeForm => {
    const methods = useForm<ConferenceTime>({
        mode: 'onChange',
        resolver: yupResolver<ConferenceTime>(getConferenceTimeValidationScheme()),
        defaultValues: config
    });

    return { methods };
}