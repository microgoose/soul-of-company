import {CrossIcon} from "@/shared/assets";
import {useOnScroll} from "@/shared/hooks/use-on-scroll.ts";
import {Modal} from "@/shared/ui/modal";
import {ScrollbarContainer} from "@/shared/ui/scrollbar";
import classNames from "classnames";
import {ReactNode, useCallback, useEffect, useMemo, useRef} from "react";
import styles from './ModalForm.module.scss';

interface DefaultFormProps {
    title: ReactNode,
    isOpen: boolean,
    scrollable?: boolean,
    onClose: () => void,
    children: ReactNode,
}

export const ModalForm = (props: DefaultFormProps) => {
    const { title, scrollable = true, children, isOpen, onClose } = props;
    const elementRef = useRef<HTMLDivElement | null>(null);
    const {setEl, scrollTop} = useOnScroll<HTMLDivElement>();

    const modalFormClasses = useMemo(() => classNames({
        [styles.modalForm]: true,
        [styles.scrollable]: scrollable
    }), [scrollable]);

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
        <Modal isOpen={isOpen} onClose={onClose} className={modalFormClasses}>
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