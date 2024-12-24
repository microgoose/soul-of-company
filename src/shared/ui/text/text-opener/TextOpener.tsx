import {ReactNode, useEffect, useRef, useState} from "react";
import {useToggle} from "@/shared/hooks/use-toggle.ts";
import {EmptyButton} from "@/shared/ui/button";
import styles from './TextOpener.module.scss';
import {ArrowDiagonalTopLeft} from "@/shared/assets";
import {subscribe, unsubscribe} from "@/shared/utils/resize-observer-event-bus.ts";

interface TextOpenerProps {
    maxHeight: number,
    openText: string,
    closeText: string,
    children: ReactNode,
}

export const TextOpener = ({ maxHeight, openText, closeText, children }: TextOpenerProps) => {
    const [needExpand, setNeedExpand] = useState(false);
    const {isOpen, toggle} = useToggle(false);
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!divRef.current) return;
        const divEl = divRef.current;

        const resize = () => {
            if (divEl.scrollHeight > maxHeight) {
                setNeedExpand(true);
            }
        };

        subscribe(divEl, resize);
        return () => unsubscribe(divEl, resize);
    }, [maxHeight]);

    return (
        <div className={styles.textOpener}>
            <div className={styles.text} ref={divRef} style={{ maxHeight: isOpen? 'unset' : maxHeight + 'px' }}>
                <div>{children}</div>
            </div>
            {needExpand && <div className={styles.toggleText}>
                <EmptyButton onClick={toggle}>
                    <ArrowDiagonalTopLeft/>
                    {isOpen? closeText : openText }
                </EmptyButton>
            </div>}
        </div>
    );
}