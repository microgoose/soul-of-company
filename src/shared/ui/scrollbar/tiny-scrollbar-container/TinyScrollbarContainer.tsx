import {forwardRef, ReactNode} from "react";
import classNames from "classnames";
import styles from './TinyScrollbarContainer.module.scss';

interface TinyScrollbarContainerProps {
    className?: string,
    children: ReactNode,
}

export const TinyScrollbarContainer = forwardRef<HTMLDivElement, TinyScrollbarContainerProps>(({ className, children }, ref) => {
    return (
        <div ref={ref} className={classNames(className, styles.container)}>
            {children}
        </div>
    );
});