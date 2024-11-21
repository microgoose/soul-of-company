import {Modal} from "@/shared/ui/modal";
import {ReactNode, useCallback, useEffect, useMemo, useRef} from "react";
import {CrossIcon} from "@/shared/assets";
import styles from './ModalForm.module.scss';
import {ScrollbarContainer} from "@/shared/ui/scrollbar";
import {useOnScroll} from "@/shared/hooks/use-on-scroll.ts";
import classNames from "classnames";

interface DefaultFormProps {
    title: ReactNode,
    isOpen: boolean,
    onClose: () => void,
    children: ReactNode,
}

export const ModalForm = ({ title, children, isOpen, onClose }: DefaultFormProps) => {
    const elementRef = useRef<HTMLDivElement | null>(null);
    const {setEl, scrollTop} = useOnScroll<HTMLDivElement>();
    const headerContainerClasses = useMemo(() => classNames({
        [styles.headerContainer]: true,
        [styles.scrolled]: scrollTop > 0,
    }), [scrollTop]);

    const handleOnClose = useCallback(() => onClose(), [onClose]);

    useEffect(() => {
        if (isOpen && elementRef.current) {
            setEl(elementRef.current);
        }
    }, [isOpen, setEl]);

    return (
        <Modal isOpen={isOpen} onClose={onClose} className={styles.modalForm}>
            <div className={headerContainerClasses}>
                <div className={styles.title}>{title}</div>
                <button className={styles.closeButton} onClick={handleOnClose}>
                    <CrossIcon/>
                </button>
            </div>
            <ScrollbarContainer ref={elementRef} className={styles.bodyContainer}>
                {children}
            </ScrollbarContainer>
        </Modal>
    );
};