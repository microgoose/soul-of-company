import {ReactNode, useCallback, useMemo} from "react";
import ReactDOM from "react-dom";
import styles from './Modal.module.scss';
import classNames from "classnames";
import {useDeferredUnmount} from "@/shared/hooks/use-deferred-unmount.ts";
import {getDurationCssVariable} from "@/shared/utils/get-css-variable.ts";
import {parseDuration} from "@/shared/utils/time-utils.ts";

interface ModalProps {
    className?: string,
    children: ReactNode,
    isOpen: boolean,
    onClose: () => void,
}

export const Modal = ({ className, children, isOpen, onClose }: ModalProps) => {
    const duration = useMemo(() => parseDuration(getDurationCssVariable('--animation-duration-fast')), []);
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