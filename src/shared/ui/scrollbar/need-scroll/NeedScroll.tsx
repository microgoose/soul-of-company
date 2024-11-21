import {ReactNode, useMemo} from "react";
import classNames from "classnames";
import {useNeedVerticalScrollbar} from "@/shared/hooks/use-need-scrollbar.ts";
import {ScrollbarContainer} from "@/shared/ui/scrollbar";

interface OuterScrollProps {
    className?: string,
    needScrollClass?: string,
    children: ReactNode,
}

export const NeedScroll = ({className, needScrollClass, children}: OuterScrollProps) => {
    const {elementRef, needScrollbar} = useNeedVerticalScrollbar<HTMLDivElement>();
    const innerClassName = useMemo(() => {
        const classes = className? [className] : [];

        if (needScrollbar && needScrollClass) {
            classes.push(needScrollClass);
        }
        
        return classNames(classes);
    }, [className, needScrollClass, needScrollbar]);

    return (
        <ScrollbarContainer ref={elementRef} className={innerClassName}>
            {children}
        </ScrollbarContainer>
    );
}