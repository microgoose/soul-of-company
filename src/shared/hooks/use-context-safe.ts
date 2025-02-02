import {t} from "i18next";
import {Context, useContext} from "react";

export const useContextSafe = <T> (context: Context<T>) => {
    const value = useContext(context);

    if (value === null || value === undefined) {
        throw new Error(t('errors.contextNotInitialized'));
    }

    return value;
}