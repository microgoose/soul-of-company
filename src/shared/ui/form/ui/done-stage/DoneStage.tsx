import styles from './DoneStage.module.scss';
import {EmptyJackdaw} from "@/shared/assets";
import classNames from "classnames";

interface DoneStageProps {
    message: string,
    className?: string,
}

export const DoneStage = ({ message, className }: DoneStageProps) => {
    return (
        <div className={classNames(styles.doneStage, className)}>
            <span>
                <EmptyJackdaw/>
                {message}
            </span>
        </div>
    );
}