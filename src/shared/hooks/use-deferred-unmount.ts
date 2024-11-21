import {useEffect, useState} from "react";

export const useDeferredUnmount = (isMount: boolean, msDelay: number) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isMount) {
            setIsVisible(true);
        } else {
            const timeout = setTimeout(() => setIsVisible(false), msDelay);
            return () => clearTimeout(timeout);
        }
    }, [isMount, msDelay]);

    return isVisible;
};