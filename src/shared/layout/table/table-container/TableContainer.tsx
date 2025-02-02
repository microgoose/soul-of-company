import {OuterVerticalScroll} from "@/shared/ui/scrollbar";
import {t} from "i18next";
import {ReactNode} from "react";
import styles from './TableContainer.module.scss';

interface TableSectionProps {
    isLoading?: boolean
    errorMessage?: string
    children: ReactNode
}

export const TableContainer = ({ isLoading, errorMessage, children }: TableSectionProps) => {
    //todo loading state
    if (isLoading) {
        return t('loading');
    }

    if (errorMessage) {
        return errorMessage;
    }

    return (
        <OuterVerticalScroll className={styles.tableSection}>
            {children}
        </OuterVerticalScroll>
    );
};