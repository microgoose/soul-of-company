import {FieldClassState, FieldInputContainer, FieldLabel, useFieldState} from "@/shared/ui/field";
import styles from './OtherText.module.scss';

interface OtherTextProps {
    label: string,
    text: string,
}

export const OtherText = ({ label, text }: OtherTextProps) => {
    const fieldState = useFieldState({
        label: label,
    });

    return (
        <FieldClassState fieldState={fieldState}>
            <FieldLabel>{label}</FieldLabel>
            <FieldInputContainer className={styles.textContainer}>
                <input readOnly value={text} className={styles.text}/>
            </FieldInputContainer>
        </FieldClassState>
    );
};