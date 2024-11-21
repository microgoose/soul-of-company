import {Context, useContext} from "react";
import {t} from "i18next";

export const useContextSafe = <T> (context: Context<T>) => {
    const value = useContext(context);

    if (value === null || value === undefined) {
        throw new Error(t('errors.contextNotInitialized'));
    }

    return value;
}