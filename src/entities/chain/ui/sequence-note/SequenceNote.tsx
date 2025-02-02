import {Note} from "@/shared/ui/note";
import {t} from "i18next";
import {ReactNode} from "react";
import styles from './SequenceNote.module.scss';

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