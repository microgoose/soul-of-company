import {t} from "i18next";
import {Note} from "@/shared/ui/note";
import styles from './OtherTextNoteForm.module.scss';
import {OtherTextFields} from "../other-text-fields/OtherTextFields.tsx";
import {UseFormReturn} from "react-hook-form";
import {OtherTexts} from "@/shared/types/entities";

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