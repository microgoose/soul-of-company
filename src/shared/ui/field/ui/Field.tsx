import {ReactNode} from "react";
import {FieldClassState} from "./FieldClassState.tsx";
import {FieldError} from "./FieldError.tsx";
import {FieldLabel} from "./FieldLabel.tsx";
import {FieldInputContainer, InputProperties, useFieldState} from "@/shared/ui/field";
import {useAutoScroll} from "@/shared/hooks/use-auto-scroll.ts";

interface FieldProps extends InputProperties {
    isActive?: boolean,
    autoScroll?: boolean
    children: ReactNode,
}

export const Field = (props: FieldProps) => {
    const { label, error, isActive, autoScroll = true, children } = props;
    const fieldState = useFieldState({ ...props, isActive });
    const fieldRef = useAutoScroll<HTMLDivElement>(autoScroll && fieldState.isActive);

    return (
        <FieldClassState fieldState={fieldState}>
            {label && <FieldLabel>{label}</FieldLabel>}

            <FieldInputContainer ref={fieldRef}>
                {children}
            </FieldInputContainer>

            {error && <FieldError>{error}</FieldError>}
        </FieldClassState>
    );
};