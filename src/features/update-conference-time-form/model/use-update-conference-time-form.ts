import {useForm, UseFormReturn} from "react-hook-form";
import {ConferenceTime} from "@/shared/types/entities";

export interface UseUpdateConferenceTimeForm {
    methods:  UseFormReturn<ConferenceTime>
}

export const useUpdateConferenceTimeForm = (config: ConferenceTime): UseUpdateConferenceTimeForm => {
    const methods = useForm<ConferenceTime>({
        mode: 'onChange',
        defaultValues: config
    });

    return { methods };
}