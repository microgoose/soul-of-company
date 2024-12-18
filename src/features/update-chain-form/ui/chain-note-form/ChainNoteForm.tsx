import {SequenceItemField, SequenceNote} from "@/entities/chain";
import {UseChainForm} from "@/features/update-chain-form/model/use-chain-form.ts";

interface OtherTextNoteFormProps {
    form: UseChainForm
}

export const ChainNoteForm = ({ form }: OtherTextNoteFormProps) => {
    const { chainLinksValues, roleOptions, errors, onChange } = form;

    return (
        <SequenceNote>
            {chainLinksValues.map((chainLink, i) => (
                <SequenceItemField
                    key={i}
                    rolesOptions={roleOptions[i]}
                    value={chainLink}
                    errorMessage={errors[i]?.message}
                    onChange={(value) => onChange(value, i)}
                />
            ))}
        </SequenceNote>
    );
};