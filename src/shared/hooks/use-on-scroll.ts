import {useEffect, useState} from "react";

export const useOnScroll = <T extends HTMLElement>(callback?: (el: T) => void) => {
    const [el, setEl] = useState<T | null>(null);
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        if (!el) return;

        const onScroll = () => {
            setScrollTop(el.scrollTop);
            callback?.(el);
        };

        el.addEventListener('scroll', onScroll);
        return () => el.removeEventListener('scroll', onScroll);
    }, [el, callback]);

    return { setEl, scrollTop };
};