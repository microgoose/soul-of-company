import {ConferenceTimeFields} from "@/entities/mailing";
import {UseUpdateConferenceTimeForm} from "@/features/update-conference-time-form";
import {FormProvider} from "react-hook-form";

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