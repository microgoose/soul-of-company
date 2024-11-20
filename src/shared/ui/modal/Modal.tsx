import {ReactNode} from "react";
import ReactDOM from "react-dom";
import styles from './Modal.module.scss';
import classNames from "classnames";

interface ModalProps {
    isOpen: boolean,
    onClose: () => void,
    className?: string,
    children: ReactNode,
}

export const Modal = ({ children, isOpen, className, onClose }: ModalProps) => {
    if (!isOpen)
        return null;

    return ReactDOM.createPortal(
        <div className={styles.modal}>
            <div className={styles.background} onClick={onClose}/>
            <div className={classNames(styles.content, className)}>
                {children}
            </div>
        </div>,
        document.body
    );
}