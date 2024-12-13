import i18n from "i18next";

export const toMoney = (value: number) => {
    if (isNaN(value)) {
        throw new Error("Invalid number provided.");
    }

    const currentLocale = i18n.language || 'en-US';
    return value.toLocaleString(currentLocale, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}