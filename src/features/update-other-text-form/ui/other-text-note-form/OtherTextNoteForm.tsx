import {t} from "i18next";
import {Note} from "@/shared/ui/note";
import styles from './OtherTextNoteForm.module.scss';
import {OtherTextFields} from "../other-text-fields/OtherTextFields.tsx";
import {UseOtherTextForm} from "@/features/update-other-text-form";

interface OtherTextNoteFormProps {
    form: UseOtherTextForm,
}

export const OtherTextNoteForm = ({ form }: OtherTextNoteFormProps) => {
    return (
        <Note title={t('chain.otherText')} className={styles.otherText}>
            <OtherTextFields form={form}/>
        </Note>
    );
};