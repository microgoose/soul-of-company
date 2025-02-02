import classNames from "classnames";
import {ReactNode, useMemo} from "react";
import {FieldState} from "../model/use-field-state.ts";
import originStyles from "./Field.module.scss";

interface FieldClassesState extends Record<string, string | undefined> {
    hasLabel?: string,
    hasError?: string,
    isActive?: string,
    isEmpty?: string,
    isFilled?: string,
    isError?: string,
    isDisabled?: string,
}

interface InputClassStateProps {
    fieldState: FieldState,
    styles?: FieldClassesState,
    className?: string,
    children: ReactNode,
}

export const FieldClassState = (props: InputClassStateProps) => {
    const { fieldState, styles, className, children } = props;
    const classesState = useMemo(() => {
        const classes = [originStyles.fieldClassState];
        
        for (const key in fieldState) {
            if (!fieldState[key])
                continue;
            
            if (originStyles[key]) {
                classes.push(originStyles[key]);
            }

            if (styles && styles[key]) {
                classes.push(styles[key]);
            }
        }
        
        return classNames(classes);
    }, [fieldState, styles]);

    return (
        <div className={classNames(classesState, className)}>
            {children}
        </div>
    );
};