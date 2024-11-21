export const getDurationCssVariable = (name: string, el = document.documentElement) => {
    return getComputedStyle(el).getPropertyValue(name);
}