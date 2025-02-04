import classNames from "classnames";
import {ReactNode} from "react";
import styles from "./PageTitle.module.scss";

interface PageTitleProps {
    className?: string,
    children?: ReactNode,
}

export const PageTitle = ({ className, children }: PageTitleProps) => {
    return (
        <div className={classNames(styles.title, className)}>
            {children}
        </div>
    );
}