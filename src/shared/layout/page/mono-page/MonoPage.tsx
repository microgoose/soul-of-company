import classNames from "classnames";
import {ReactNode} from "react";
import styles from './MonoPage.module.scss';

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