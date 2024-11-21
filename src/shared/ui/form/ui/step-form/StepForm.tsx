import {ReactNode} from "react";
import styles from './StepForm.module.scss';
import classNames from "classnames";

interface StagedFormProps {
    step: number,
    steps: ReactNode[],
}

export const StepForm = ({ steps, step }: StagedFormProps) => {
    return (
        <div className={styles.stepForm}>
            {steps.map((child, stepIndex) => (
                <div key={stepIndex} className={classNames({[styles.activeStep]: step === stepIndex})}>{child}</div>
            ))}
        </div>
    );
}