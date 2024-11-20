import {Modal} from "@/shared/ui/modal";
import {ReactNode} from "react";
import {CrossIcon} from "@/shared/assets";
import styles from './ModalForm.module.scss';

interface DefaultFormProps {
    title: ReactNode,
    isOpen: boolean,
    onClose: () => void,
    children: ReactNode,
}

export const ModalForm = ({ title, children, isOpen, onClose }: DefaultFormProps) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} className={styles.modalForm}>
            <div className={styles.headerContainer}>
                <div className={styles.title}>{title}</div>
                <button className={styles.closeButton}>
                    <CrossIcon/>
                </button>
            </div>
            <div className={styles.bodyContainer}>
                {children}
            </div>
        </Modal>
    );
};