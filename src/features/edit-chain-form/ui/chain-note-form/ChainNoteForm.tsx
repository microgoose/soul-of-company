import {SequenceItemField, SequenceItems, SequenceItemValue, SequenceNote} from "@/entities/chain";
import {Controller, useFieldArray, UseFormReturn} from "react-hook-form";
import {useRoleOptions} from "@/features/edit-chain-form/model/use-role-options.ts";
import {ButtonSize, ButtonType, IconButton} from "@/shared/ui/button";
import {CrossIcon} from "@/shared/assets";
import styles from './ChainNoteForm.module.scss';
import {useCallback} from "react";

export interface ChainNoteFields {
    links: SequenceItemValue[],
}

interface OtherTextNoteFormProps {
    form: UseFormReturn<ChainNoteFields>
}

export const ChainNoteForm = ({ form }: OtherTextNoteFormProps) => {
    const { control, formState: { errors } } = form;
    const roleOptions = useRoleOptions();
    const { fields, append, remove } = useFieldArray({ control, name: 'links' });

    const handleAppendChainLink = useCallback(() => {
        append({ role: roleOptions[0].value, text: ''  });
    }, [append, roleOptions]);

    return (
        <SequenceNote>
            <SequenceItems>
                {fields.map((chainLink, index) => (
                    <div key={chainLink.id} className={styles.chainLink}>
                        <Controller
                            name={`links.${index}`}
                            control={control}
                            render={({field}) =>
                                <SequenceItemField
                                    rolesOptions={roleOptions}
                                    value={field.value}
                                    roleError={errors.links?.[index]?.role?.message}
                                    textError={errors.links?.[index]?.text?.message}
                                    onChange={field.onChange}
                                />
                            }/>

                        <IconButton
                            type={ButtonType.FILLED}
                            size={ButtonSize.SMALL}
                            className={styles.removeChainLink}
                            onClick={() => remove(index)}
                        >
                            <CrossIcon/>
                        </IconButton>
                    </div>
                ))}
            </SequenceItems>

            <IconButton
                size={ButtonSize.SMALL}
                className={styles.addChainLink}
                onClick={handleAppendChainLink}
            >
                <CrossIcon/>
            </IconButton>
        </SequenceNote>
    );
};