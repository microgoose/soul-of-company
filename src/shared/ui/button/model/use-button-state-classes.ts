import {useCallback, useState} from "react";
import {ButtonSize, ButtonState, ButtonType} from "@/shared/ui/button";

interface ButtonStateClassesReturnType {
    classes: string[],
    hovered: boolean,
    onMouseDown: () => void,
    onMouseUp: () => void,
    onMouseEnter: () => void,
    onMouseLeave: () => void,
}
interface UseButtonStateClassesProps {
    styles: Record<string, string>,
    state: ButtonState,
    type?: ButtonType,
    size?: ButtonSize
}

type UseButtonStateClassesHook = (props: UseButtonStateClassesProps) => ButtonStateClassesReturnType

export const useButtonStateClasses: UseButtonStateClassesHook = (props) => {
    const {styles, state, type = ButtonType.FILLED, size = ButtonSize.MIDDLE} = props;
    const [hovered, setHovered] = useState(state === ButtonState.HOVERED);
    const [active, setActive] = useState(state === ButtonState.ACTIVE);
    const classes = [styles.button];

    if (type == ButtonType.EMPTY)
        classes.push(styles.typeEmpty);
    else if (type == ButtonType.FILLED)
        classes.push(styles.typeFilled);

    if (size == ButtonSize.SMALL)
        classes.push(styles.smallSize);
    else if (size == ButtonSize.MIDDLE)
        classes.push(styles.middleSize);

    if (hovered)
        classes.push(styles.buttonHovered);

    if (state === ButtonState.DISABLED)
        classes.push(styles.buttonDisabled);
    else if (active || state === ButtonState.ACTIVE)
        classes.push(styles.buttonActive);

    const onMouseDown= useCallback(() => setActive(true), [setActive]);
    const onMouseUp= useCallback(() => setActive(false), [setActive]);
    const onMouseEnter= useCallback(() => setHovered(true), [setHovered]);
    const onMouseLeave= useCallback(() => {
        setHovered(false);
        setActive(false);
    }, [setHovered]);

    return { classes, hovered, onMouseDown, onMouseUp, onMouseEnter, onMouseLeave };
}