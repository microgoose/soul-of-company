import {PrimaryButton, SecondaryButton} from "@/shared/ui/button";
import {t} from "i18next";
import styles from './ChangePageMode.module.scss';

interface ChangePageModeProps {
    isEditMode: boolean,
    onEditMode: () => void,
    onSave: () => void,
    onUndo: () => void,
}

export const ChangePageMode = ({ isEditMode, onEditMode, onSave, onUndo }: ChangePageModeProps) => {
    if (isEditMode) {
        return (
            <div className={styles.editMode}>
                <SecondaryButton onClick={onUndo}>
                    <span>{t('actions.undoChanges')}</span>
                </SecondaryButton>
                <PrimaryButton onClick={onSave}>
                    <span>{t('actions.saveСhanges')}</span>
                </PrimaryButton>
            </div>
        );
    }

    return (
        <SecondaryButton onClick={onEditMode}>
            <span>{t('chain.changeChain')}</span>
        </SecondaryButton>
    );
};