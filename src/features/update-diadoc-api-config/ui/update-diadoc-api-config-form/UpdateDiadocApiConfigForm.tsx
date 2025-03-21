import {DiadocApiFields} from "@/entities/mailing";
import {
    getDiadocApiValidationScheme
} from "@/features/update-diadoc-api-config/model/get-diadoc-api-validation-scheme.ts";
import {DiadocApiConfig} from "@/shared/types/entities";
import {Fieldset} from "@/shared/ui/fieldset";
import {yupResolver} from "@hookform/resolvers/yup";
import {FormProvider, useForm} from "react-hook-form";
import {DiadocApiFormLegend} from "../diadoc-api-form-legend/DiadocApiLegendAction.tsx";

interface UpdateDiadocApiConfigFormProps {
    diadocApiCofig: DiadocApiConfig,
    onSubmit: (diadocApiCofig: DiadocApiConfig) => void
}

export const UpdateDiadocApiConfigForm = ({ diadocApiCofig, onSubmit }: UpdateDiadocApiConfigFormProps) => {
    const methods = useForm<DiadocApiConfig>({
        mode: 'onChange',
        resolver: yupResolver<DiadocApiConfig>(getDiadocApiValidationScheme()),
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