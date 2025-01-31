import styles from './MonoPage.module.scss';
import {ReactNode} from "react";
import classNames from "classnames";

interface Props {
    className?: string,
    children: ReactNode
}

export const MonoPage = ({ className, children }: Props) => {
    return (
        <div className={classNames(styles.monoPage, className)}>
            {children}
        </div>
    );
};