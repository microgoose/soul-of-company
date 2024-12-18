import {useCallback, useEffect, useState} from "react";
import {setToArray} from "@/shared/utils/array-utils.ts";
import {t} from "i18next";
import {OptionType} from "@/shared/ui/select";
import {ChainLink, Role} from "@/shared/types/entities";

export interface ChainLinkValue {
    role: number,
    text: string
}

export interface UseChainForm {
    roleOptions: OptionType[][],
    chainLinksValues: ChainLinkValue[]
    errors: Error[],
    onChange: (chainLink: ChainLinkValue, index: number) => void,
    reset: () => void,
}

export const useChainForm = (chainLinks: ChainLink[], roles: Role[]): UseChainForm => {
    const [roleOptions, setRoleOptions] = useState<OptionType[][]>([]);
    const [chainLinksValues, setChainLinksValues] = useState<ChainLinkValue[]>([]);
    const [errors, setErrors] = useState<Error[]>([]);

    const onChange = useCallback((chainLink: ChainLinkValue, index: number) => {
        if (!chainLink.role) {
            setErrors(setToArray(new Error(t('chainLink.validation.role.required')), errors, index));
        }
        if (!chainLink.text) {
            setErrors(setToArray(new Error(t('chainLink.validation.text.required')), errors, index));
        }

        setChainLinksValues(setToArray(chainLink, chainLinksValues, index));
    }, [chainLinksValues, errors]);

    const reset = useCallback(() => {
        setErrors([]);
        const rolesOptions: OptionType[] = roles.map(r => ({ value: r.id, label: r.name }));
        const newRoleOptions: OptionType[][] = [];
        const newChainLinksValues: ChainLinkValue[] = [];

        chainLinks.forEach((chainLink, index) => {
            newRoleOptions[index] = rolesOptions;
            newChainLinksValues[index] = {
                role: chainLink.role.id,
                text: chainLink.text,
            };
        });

        setRoleOptions(newRoleOptions);
        setChainLinksValues(newChainLinksValues);
    }, [chainLinks, roles]);

    useEffect(() => {
        reset();
    }, [reset]);

    return { roleOptions, chainLinksValues, errors, onChange, reset };
}