import {RefObject, useEffect} from "react";

export const useOutsideClick = <T extends HTMLElement>(
    ref: RefObject<T>,
    callback: () => void,
    start: boolean = true
): void => {
    useEffect(() => {
        if (!start) return;

        const handleClickOutside = (event: MouseEvent | TouchEvent) => {
            const target = event.target as Node | null;

            if (ref.current && target && !ref.current.contains(target)) {
                callback();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, [ref, callback, start]);
};
