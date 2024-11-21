import {forwardRef, ReactNode, useImperativeHandle, useRef} from "react";
import {useOutsideClick} from "@/shared/hooks/use-outside-click.ts";

interface OuterClickProps {
    className?: string,
    start?: boolean,
    children: ReactNode,
    onOuterClick: () => void,
}

export const OuterClick = forwardRef((props: OuterClickProps, outerRef) => {
    const {className, start, children, onOuterClick} = props;
    const ref = useRef<HTMLDivElement>(null);
    useOutsideClick(ref, onOuterClick, start);

    useImperativeHandle(outerRef, () => ref.current);

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
});