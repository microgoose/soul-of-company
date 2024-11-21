type ResizeCallback = <T extends HTMLElement> (el: T) => void;

const callbacksMap = new Map<HTMLElement, Set<ResizeCallback>>();
const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
        const element = entry.target as HTMLElement;

        const callbacks = callbacksMap.get(element);
        if (callbacks) {
            callbacks.forEach((callback) => callback(element));
        }
    }
});

export const subscribe = (element: HTMLElement, callback: ResizeCallback) => {
    if (!resizeObserver) return;

    if (!callbacksMap.has(element)) {
        callbacksMap.set(element, new Set());
        resizeObserver.observe(element);
    }

    callbacksMap.get(element)!.add(callback);
};

export const unsubscribe = (element: HTMLElement, callback: ResizeCallback) => {
    const callbacks = callbacksMap.get(element);
    if (!callbacks) return;

    callbacks.delete(callback);

    if (callbacks.size === 0) {
        callbacksMap.delete(element);
        resizeObserver?.unobserve(element);
    }
};