import {useAutoScroll} from "@/shared/hooks/use-auto-scroll.ts";
import {FieldInputContainer, InputProperties, useFieldState} from "@/shared/ui/field";
import {ReactNode} from "react";
import {FieldClassState} from "./FieldClassState.tsx";
import {FieldError} from "./FieldError.tsx";
import {FieldLabel} from "./FieldLabel.tsx";

interface FieldProps extends InputProperties {
    className?: string,
    isActive?: boolean,
    autoScroll?: boolean
    children: ReactNode,
}

export const Field = (props: FieldProps) => {
    const { className, label, error, isActive, autoScroll = true, children } = props;
    const fieldState = useFieldState({ ...props, isActive });
    const fieldRef = useAutoScroll<HTMLDivElement>(autoScroll && fieldState.isActive);

    return (
        <FieldClassState fieldState={fieldState} className={className}>
            {label && <FieldLabel>{label}</FieldLabel>}

            <FieldInputContainer ref={fieldRef}>
                {children}
            </FieldInputContainer>

            {error && <FieldError>{error}</FieldError>}
        </FieldClassState>
    );
};