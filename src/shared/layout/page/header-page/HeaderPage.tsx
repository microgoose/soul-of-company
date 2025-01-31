import styles from './HeaderPage.module.scss';
import {ReactNode} from "react";
import classNames from "classnames";

interface Props {
    className?: string,
    children: ReactNode
}

export const HeaderPage = ({ className, children }: Props) => {
    return (
        <div className={classNames(styles.headerPage, className)}>
            {children}
        </div>
    );
};