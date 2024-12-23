import {t} from "i18next";
import {Note} from "@/shared/ui/note";
import styles from './SequenceNote.module.scss';
import {ReactNode} from "react";

interface SequenceProps {
    children: ReactNode,
}

export const SequenceNote = ({ children }: SequenceProps) => {
    return (
        <Note title={t('chain.sequence')} bodyClassName={styles.sequence}>
            {children}
        </Note>
    );
};