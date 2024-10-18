import {useState} from "react";
import {ButtonState} from "@/shared/ui/button";

interface ButtonStateClassesReturnType {
    classes: string[],
    setHovered: (hovered: boolean) => void
    setActive: (active: boolean) => void
    setDisabled: (active: boolean) => void
}
type UseButtonStateClassesType = (styles: Record<string, string>, state: ButtonState) => ButtonStateClassesReturnType;

export const useButtonStateClasses: UseButtonStateClassesType = (styles, state) => {
    const [hovered, setHovered] = useState(state === ButtonState.HOVERED);
    const [disabled, setDisabled] = useState(state === ButtonState.DISABLED);
    const [active, setActive] = useState(state === ButtonState.ACTIVE);
    const classes = [styles.button];

    if (active)
        classes.push(styles.buttonActive)
    else if (disabled)
        classes.push(styles.buttonDisabled)
    else if (hovered)
        classes.push(styles.buttonHovered)

    return { classes, setHovered, setDisabled, setActive: setActive };
}