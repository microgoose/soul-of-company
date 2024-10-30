import {useEffect, useRef, useState} from "react";

export const useNeedVerticalScrollbar = (deps: unknown) => {
    const elementRef = useRef<HTMLElement | null>(null);
    const [needScrollbar, setNeedScrollbar] = useState(false);

    useEffect(() => {
        const checkScrollbar = () => {
            if (elementRef.current) {
                const element = elementRef.current;
                const hasVerticalScrollbar = element.scrollHeight > element.clientHeight;
                setNeedScrollbar(hasVerticalScrollbar);
            }
        };

        requestAnimationFrame(() => checkScrollbar());
        window.addEventListener('resize', checkScrollbar);
        return () => window.removeEventListener('resize', checkScrollbar);
    }, [deps]);

    return {elementRef, needScrollbar};
};