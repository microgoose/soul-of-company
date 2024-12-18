import {t} from "i18next";
import {Note} from "@/shared/ui/note";
import styles from './SequenceNote.module.scss';
import {ReactElement} from "react";
import {SequenceItems} from "@/entities/chain";

interface SequenceProps {
    children: ReactElement[],
}

export const SequenceNote = ({ children }: SequenceProps) => {
    return (
        <Note title={t('chain.sequence')} className={styles.sequence}>
            <SequenceItems>
                {children}
            </SequenceItems>
        </Note>
    );
};