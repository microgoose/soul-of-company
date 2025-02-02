import {InputProperties} from "@/shared/ui/field";
import {useMemo} from "react";

interface UseFieldStateProps extends InputProperties {
    isActive?: boolean,
}

export interface FieldState extends Record<string, boolean> {
    hasLabel: boolean,
    hasError: boolean,
    isActive: boolean,
    isEmpty: boolean,
    isFilled: boolean,
    isError: boolean,
    isDisabled: boolean,
}

export const useFieldState = (props: UseFieldStateProps)  => {
    return useMemo<FieldState>(() => {
        let isFilled;

        if (Array.isArray(props.value)) {
            isFilled = props.value.length > 0;
        } else {
            isFilled = !!props.value || props.value === 0;
        }

        const state: FieldState = {
            hasLabel: !!props.label,
            hasError: !!props.error,
            isActive: !!props.isActive,
            isEmpty: !isFilled,
            isFilled,
            isError: !!props.error,
            isDisabled: !!props.disabled,
        };

        return state;
    }, [props]);
};