import {TemperatureMessagesFields} from "@/entities/mailing";
import {FormProvider} from "react-hook-form";
import {
    UseEditTemperatureMessagesForm
} from "@/features/edit-temperature-messages-form/model/use-edit-temperature-messages-form.ts";

type Props = {
    form: UseEditTemperatureMessagesForm,
}

export const TemperatureMessagesForm = ({ form }: Props) => {
    return (
        <FormProvider {...form.methods}>
            <TemperatureMessagesFields/>
        </FormProvider>
    );
};