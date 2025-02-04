import classNames from "classnames";
import {ReactNode} from "react";
import styles from "./PageHeader.module.scss";

interface Props {
    className?: string,
    children: ReactNode
}

export const PageHeader = ({ className, children }: Props) => {
    return (
        <div className={classNames(styles.pageHeader, className)}>
            {children}
        </div>
    );
};