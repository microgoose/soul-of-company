import classNames from "classnames";
import {ReactNode} from "react";
import styles from './Page.module.scss';

interface Props {
    className?: string,
    children: ReactNode
}

export const Page = ({ className, children }: Props) => {
    const pageClassNames = classNames(styles.page, className, {
       [styles.headerLessPage]: true,
    });

    return (
        <div className={pageClassNames}>
            {children}
        </div>
    );
};