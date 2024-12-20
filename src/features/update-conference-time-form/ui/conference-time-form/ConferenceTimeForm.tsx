import {ConferenceTimeFields} from "@/entities/mailing";
import {FormProvider} from "react-hook-form";
import {UseUpdateConferenceTimeForm} from "@/features/update-conference-time-form";

type Props = {
    form: UseUpdateConferenceTimeForm
}

export const ConferenceTimeForm = (props: Props) => {
    const { form } = props;
    
    return (
        <FormProvider {...form.methods}>
            <ConferenceTimeFields/>
        </FormProvider>
    );
};