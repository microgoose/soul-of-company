import styles from './ManagementWidget.module.scss';
import {ReactNode} from "react";

interface ManagementWidgetProps {
    children: ReactNode
}

export const ManagementWidget = ({ children }: ManagementWidgetProps) => {
    return (
        <div className={styles.userManagementWidget}>
            {children}
        </div>
    );
};