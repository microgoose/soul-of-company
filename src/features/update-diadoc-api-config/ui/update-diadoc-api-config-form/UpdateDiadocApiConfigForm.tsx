import {Fieldset} from "@/shared/ui/fieldset";
import {DiadocApiFormLegend} from "../diadoc-api-form-legend/DiadocApiLegendAction.tsx";
import {DiadocApiFields} from "@/entities/mailing";
import {FormProvider, useForm} from "react-hook-form";
import {DiadocApiConfig} from "@/shared/types/entities";

interface UpdateDiadocApiConfigFormProps {
    diadocApiCofig: DiadocApiConfig,
    onSubmit: (diadocApiCofig: DiadocApiConfig) => void
}

export const UpdateDiadocApiConfigForm = ({ diadocApiCofig, onSubmit }: UpdateDiadocApiConfigFormProps) => {
    const methods = useForm<DiadocApiConfig>({
        mode: 'onChange',
        defaultValues: diadocApiCofig
    });

    return (
        <FormProvider {...methods}>
            <Fieldset legend={<DiadocApiFormLegend onSubmit={methods.handleSubmit(onSubmit)}/>}>
                <DiadocApiFields/>
            </Fieldset>
        </FormProvider>
    );
};