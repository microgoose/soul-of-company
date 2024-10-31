import {useCallback, useState} from "react";
import {ButtonSize, ButtonState, ButtonType} from "@/shared/ui/button";
import {ButtonRadius} from "@/shared/ui/button/model/button-radius.ts";

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
    radius?: ButtonRadius
}

type UseButtonStateClassesHook = (props: UseButtonStateClassesProps) => ButtonStateClassesReturnType

export const useButtonStateClasses: UseButtonStateClassesHook = (props) => {
    const {styles, state, type = ButtonType.FILLED, size = ButtonSize.MIDDLE, radius = ButtonRadius.MIDDLE} = props;
    const [hovered, setHovered] = useState(state === ButtonState.HOVERED);
    const [pressed, setPressed] = useState(state === ButtonState.PRESSED);
    const classes = [styles.button];

    if (radius == ButtonRadius.SMALL)
        classes.push(styles.radiusSmall);
    if (radius == ButtonRadius.MIDDLE)
        classes.push(styles.radiusMiddle);

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
    if (pressed)
        classes.push(styles.buttonPressed);

    if (state === ButtonState.DISABLED)
        classes.push(styles.buttonDisabled);
    else if (state === ButtonState.ACTIVE)
        classes.push(styles.buttonActive);

    const onMouseDown= useCallback(() => setPressed(true), [setPressed]);
    const onMouseUp= useCallback(() => setPressed(false), [setPressed]);
    const onMouseEnter= useCallback(() => setHovered(true), [setHovered]);
    const onMouseLeave= useCallback(() => {
        setHovered(false);
        setPressed(false);
    }, [setHovered]);

    return { classes, hovered, onMouseDown, onMouseUp, onMouseEnter, onMouseLeave };
}