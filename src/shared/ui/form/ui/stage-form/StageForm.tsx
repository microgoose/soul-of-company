import {ReactNode} from "react";
import styles from './StageForm.module.scss';
import classNames from "classnames";

interface StagedFormProps {
    stage: number,
    stages: ReactNode[],
}

export const StageForm = ({ stages, stage }: StagedFormProps) => {
    return (
        <div className={styles.stepForm}>
            {stages.map((child, stepIndex) => (
                <div key={stepIndex} className={classNames({[styles.activeStep]: stage === stepIndex})}>{child}</div>
            ))}
        </div>
    );
}