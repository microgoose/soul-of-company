export const getDurationCssVariable = (name: string, el = document.documentElement) => {
    console.log(getComputedStyle(el).getPropertyValue(name));
    return getComputedStyle(el).getPropertyValue(name);
}