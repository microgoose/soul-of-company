import {useCallback, useEffect, useState} from "react";
import {
    UseChainController,
    useChainController,
    UseOtherTextsController,
    useOtherTextsController
} from "@/entities/chain";
import {Role} from "@/shared/types/entities";
import {UseChainForm, useChainForm} from "@/features/update-chain-form";
import {UseOtherTextForm, useOtherTextForm} from "@/features/update-other-text-form";
import {getAllRoles} from "@/entities/role";
import {t} from "i18next";

export interface UseChainSettingsController {
    isEditMode: boolean,
    otherTextsController: UseOtherTextsController,
    chainController: UseChainController,
    chainForm: UseChainForm,
    otherTextForm: UseOtherTextForm,
    handleOnEditMode: () => void,
    handleOnSave: () => void,
    handleOnUndo: () => void,
}

export const useChainSettingsController = (): UseChainSettingsController => {
    const [isEditMode, setIsEditMode] = useState(false);
    const [roles, setRoles] = useState<Role[]>([]);
    const otherTextsController = useOtherTextsController();
    const chainController = useChainController();
    const chainForm = useChainForm(chainController.links, roles);
    const otherTextForm = useOtherTextForm(otherTextsController.otherTexts);
    
    const handleOnEditMode = useCallback(() => setIsEditMode(true), []);

    const handleOnSave = useCallback(() => {
        if (chainForm.errors.length || Object.values(otherTextForm.errors).length)
            return;

        chainController.setLinks(chainForm.chainLinksValues.map((value) => {
            const role = roles.find(r => r.id === value.role);

            if (!role)
                throw new Error(t('errors.chain.findRoleEntityError'));
            
            return { id: null, role, text: value.text };
        }));

        otherTextsController.update(otherTextForm.values);
        setIsEditMode(false);
    }, [chainController, chainForm.chainLinksValues, otherTextsController, roles]);

    const handleOnUndo = useCallback(() => {
        chainForm.reset();
        otherTextForm.reset();
        setIsEditMode(false);
    }, [chainForm, otherTextForm]);

    useEffect(() => {
        chainController.load()
        otherTextsController.load();
        getAllRoles().then(roles => setRoles(roles));
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