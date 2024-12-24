import {ChangeEvent, useCallback, useEffect, useRef} from "react";

interface TextareaProps {
    className?: string;
    value: string;
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    onClick?: () => void;
    onFocus?: () => void;
    onBlur?: () => void;
}

export const TextAreaInput = (props: TextareaProps) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const adjustHeight = useCallback(() => {
        if (!textareaRef.current) return;
        textareaRef.current.style.height = "1px";
        textareaRef.current.style.height = (textareaRef.current.scrollHeight)+"px";
    }, []);

    useEffect(() => {
        adjustHeight();
    }, [adjustHeight, props.value]);

    return (
        <textarea
            ref={textareaRef}
            onKeyUp={adjustHeight}
            className={props.className}
            value={props.value}
            onChange={props.onChange}
            onClick={props.onClick}
            onFocus={props.onFocus}
            onBlur={props.onBlur}
        />
    );
};