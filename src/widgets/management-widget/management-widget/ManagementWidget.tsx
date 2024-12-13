import styles from './ManagementWidget.module.scss';
import {ReactNode} from "react";
import classNames from "classnames";

interface ManagementWidgetProps {
    className?: string,
    children: ReactNode
}

export const ManagementWidget = ({ className, children }: ManagementWidgetProps) => {
    return (
        <div className={classNames(styles.userManagementWidget, className)}>
            {children}
        </div>
    );
};