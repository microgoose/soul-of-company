import {useToggle} from "@/shared/hooks/use-toggle.ts";
import {InputProperties, useFieldState} from "@/shared/ui/field";

type UseSelectFieldStateProps = InputProperties

export const useSelectFieldState = (props: UseSelectFieldStateProps) => {
    const { isOpen, open, close, toggle } = useToggle(false);
    const fieldState = useFieldState({...props, isActive: isOpen});
    return { isOpen, fieldState, open, close, toggle };
}