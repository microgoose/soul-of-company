import {InfoTooltip} from "@/shared/ui/tooltip";
import classNames from "classnames";
import {useMemo} from "react";
import {TagStatus} from "../model/tag-status.ts";
import styles from './StatusTag.module.scss';
import {TagStatusAdditional} from "./TagStatusAdditional.tsx";

interface StatusTagProps {
    status: TagStatus,
    title: string,
    tooltip?: string,
    additional?: string,
}

export const StatusTag = ({status, title, tooltip, additional}: StatusTagProps) => {
    const classState = useMemo(() => classNames(
        styles.statusTag,
        styles[status],
    ), [status]);

    return (
        <div className={classState}>
            <div className={styles.titleContainer}>
                <span className={styles.title}>{title}</span>
                <InfoTooltip tooltip={tooltip}/>
            </div>
           <TagStatusAdditional additional={additional}/>
        </div>
    );
};