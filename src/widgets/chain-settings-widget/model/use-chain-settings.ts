import {
    UseChainController,
    useChainController,
    UseOtherTextsController,
    useOtherTextsController
} from "@/entities/chain";
import {getAllRoles} from "@/entities/role";
import {ChainNoteFields, getChainLinkValidationScheme} from "@/features/edit-chain-form";
import {
    getOtherTextValidationScheme
} from "@/features/update-other-text-form/model/get-other-text-validation-scheme.ts";
import {OtherTexts, Role} from "@/shared/types/entities";
import {yupResolver} from "@hookform/resolvers/yup";
import {useQuery} from "@tanstack/react-query";
import {t} from "i18next";
import {useCallback, useEffect, useState} from "react";
import {useForm, UseFormReturn} from "react-hook-form";

export interface UseChainSettingsController {
    isEditMode: boolean,
    otherTextsController: UseOtherTextsController,
    chainController: UseChainController,
    chainForm: UseFormReturn<ChainNoteFields>,
    otherTextForm: UseFormReturn<OtherTexts>,
    handleOnEditMode: () => void,
    handleOnSave: () => void,
    handleOnUndo: () => void,
}

export const useChainSettingsController = (): UseChainSettingsController => {
    const [isEditMode, setIsEditMode] = useState(false);
    const otherTextsController = useOtherTextsController();
    const chainController = useChainController();

    const chainForm = useForm<ChainNoteFields>({
        mode: 'onChange',
        resolver: yupResolver(getChainLinkValidationScheme()),
        values: {
            links: chainController.links.map(link => ({ role: link.role.id, text: link.text })),
        },
    });
    const otherTextForm = useForm<OtherTexts>({
        mode: 'onChange',
        resolver: yupResolver(getOtherTextValidationScheme()),
        values: otherTextsController.otherTexts,
    });

    const {data: roles = []} = useQuery<Role[]>({
        queryKey: ['roles'],
        queryFn: () => getAllRoles(),
    });
    
    const handleOnEditMode = useCallback(() => setIsEditMode(true), []);

    const handleOnSave = useCallback(async () => {
        await chainForm.trigger();
        await otherTextForm.trigger();

        if (!chainForm.formState.isValid || !otherTextForm.formState.isValid)
            return;

        otherTextsController.update(otherTextForm.getValues());
        chainController.setLinks(chainForm.getValues().links.map((value) => {
            const role = roles.find(r => r.id === value.role);

            if (!role) {
                throw new Error(t('errors.chain.findRoleEntityError'));
            }
            
            return { id: null, role, text: value.text };
        }));

        setIsEditMode(false);
    }, [chainController, chainForm, otherTextForm, otherTextsController, roles]);

    const handleOnUndo = useCallback(() => {
        chainForm.reset();
        otherTextForm.reset();
        setIsEditMode(false);
    }, [chainForm, otherTextForm]);

    useEffect(() => {
        chainController.load()
        otherTextsController.load();
    }, []);

    return {
        isEditMode,
        otherTextsController,
        chainController,
        chainForm,
        otherTextForm,
        handleOnEditMode,
        handleOnSave,
        handleOnUndo
    };
};