import {ANIMATION_DURATION_FAST} from "@/shared/config/animation-config.ts";
import {useDeferredUnmount} from "@/shared/hooks/use-deferred-unmount.ts";
import classNames from "classnames";
import {ReactNode, useCallback, useMemo} from "react";
import ReactDOM from "react-dom";
import styles from './Modal.module.scss';

interface ModalProps {
    className?: string,
    children: ReactNode,
    isOpen: boolean,
    onClose: () => void,
}

export const Modal = ({ className, children, isOpen, onClose }: ModalProps) => {
    const duration = useMemo(ANIMATION_DURATION_FAST, []);
    const isVisible = useDeferredUnmount(isOpen, duration);

    const handleOnClose = useCallback(() => onClose(), [onClose]);

    if (!isOpen && !isVisible) {
        return null;
    }

    return ReactDOM.createPortal(
        <div className={classNames(styles.modal, {[styles.isClose]: !isOpen})}>
            <div className={styles.background} onClick={handleOnClose}/>
            <div className={classNames(styles.content, className)}>
                {children}
            </div>
        </div>,
        document.body
    );
}