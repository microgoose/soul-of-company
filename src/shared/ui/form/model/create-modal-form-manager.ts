import {create} from "zustand/react";

export interface ModalFormManager {
    isOpen: boolean;
    stage: number;
    maxStage: number;
    open: () => void,
    nextStage: () => void,
    close: () => void,
}

export const createModalFormManager = (maxStage: number) => create<ModalFormManager>((set, get) => ({
    isOpen: false,
    stage: 0,
    maxStage,

    open: () => {
        set(prev => ({
            ...prev,
            stage: 0,
            isOpen: true,
        }));
    },
    nextStage: () => {
        const state = get();
        const nextStage = state.stage + 1;

        if (nextStage === state.maxStage) {
            state.close();
            return;
        }

        set(prev => ({
            ...prev,
            stage: nextStage
        }));
    },
    close: () => {
        set(prev => ({
            ...prev,
            isOpen: false,
        }));
    },
}));