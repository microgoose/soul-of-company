import {FieldClassState, FieldInputContainer, FieldLabel, useFieldState} from "@/shared/ui/field";
import styles from './TemperatureMessagesList.module.scss';

export interface TemperatureMessageFieldProps {
    className?: string,
    label: string,
    value: string | number
}

export const TemperatureMessageField = ({ className, label, value }: TemperatureMessageFieldProps) => {
    const fieldState = useFieldState({ label, value });

    return (
        <FieldClassState fieldState={fieldState} className={className}>
            <FieldLabel>{label}</FieldLabel>
            <FieldInputContainer className={styles.textContainer}>
                <input readOnly value={value} className={styles.text}/>
            </FieldInputContainer>
        </FieldClassState>
    );
};