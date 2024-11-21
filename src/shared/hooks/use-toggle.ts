import {useCallback, useState} from "react";

export const useToggle = (state: boolean) => {
    const [isOpen, setIsOpen] = useState(state);
    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => setIsOpen(false), []);
    const toggle = useCallback(() => setIsOpen(prevState => !prevState), []);

    return { isOpen, open, close, toggle };
}