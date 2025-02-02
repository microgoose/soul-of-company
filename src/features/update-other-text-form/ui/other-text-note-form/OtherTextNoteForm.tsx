import {OtherTexts} from "@/shared/types/entities";
import {Note} from "@/shared/ui/note";
import {t} from "i18next";
import {UseFormReturn} from "react-hook-form";
import {OtherTextFields} from "../other-text-fields/OtherTextFields.tsx";
import styles from './OtherTextNoteForm.module.scss';

interface OtherTextNoteFormProps {
    form: UseFormReturn<OtherTexts>,
}

export const OtherTextNoteForm = ({ form }: OtherTextNoteFormProps) => {
    return (
        <Note title={t('chain.otherText')} className={styles.otherText}>
            <OtherTextFields form={form}/>
        </Note>
    );
};