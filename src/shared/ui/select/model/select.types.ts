export interface OptionType<T> {
    value: T;
    label: string;
}

export type OptionsType<T> = OptionType<T>[];
export type SelectValue = string | number;