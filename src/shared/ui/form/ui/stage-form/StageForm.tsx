import classNames from "classnames";
import {ReactNode} from "react";
import styles from './StageForm.module.scss';

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