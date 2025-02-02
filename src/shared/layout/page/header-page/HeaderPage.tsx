import classNames from "classnames";
import {ReactNode} from "react";
import styles from './HeaderPage.module.scss';

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