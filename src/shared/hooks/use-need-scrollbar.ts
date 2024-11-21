import {useEffect, useRef, useState} from "react";
import {subscribe, unsubscribe} from "@/shared/utils/resize-observer-event-bus.ts";

export const useNeedVerticalScrollbar = <HTMLElementType extends HTMLElement>() => {
    const elementRef = useRef<HTMLElementType | null>(null);
    const [needScrollbar, setNeedScrollbar] = useState(false);

    useEffect(() => {
        const el = elementRef.current;

        if (!el) return;

        const onResize = () => {
            setNeedScrollbar(el.scrollHeight > el.clientHeight);
        }

        subscribe(el, onResize);
        return () => unsubscribe(el, onResize);
    }, []);

    return {elementRef, needScrollbar};
};