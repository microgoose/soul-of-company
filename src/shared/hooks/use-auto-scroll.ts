import {useEffect, useRef} from "react";

export const useAutoScroll = <T extends HTMLElement> (autoScroll: boolean) => {
    const elRef = useRef<T>(null);

    useEffect(() => {
        if (autoScroll && elRef.current) {
            elRef.current.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "nearest",
            });
        }
    }, [autoScroll]);

    return elRef;
}