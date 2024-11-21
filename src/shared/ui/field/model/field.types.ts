export type InputLabelType = string;
export type InputErrorType = string;
export type InputPlaceholderType = string;
export type InputType = 'tel' | 'text' | 'numeric';
export type InputDisabledType = boolean;

export interface InputProperties {
    label?: InputLabelType,
    error?: InputErrorType
    type?: InputType,
    placeholder?: InputPlaceholderType,
    disabled?: InputDisabledType,
    value?: unknown
}