import classNames from "classnames";
import {forwardRef, ReactNode} from "react";
import styles from './ScrollbarContainer.module.scss';

interface ScrollbarContainerProps {
    className?: string,
    children: ReactNode,
}

export const ScrollbarContainer = forwardRef<HTMLDivElement, ScrollbarContainerProps>(({ className, children }, ref) => {
    return (
        <div ref={ref} className={classNames(className, styles.scrollbarContainer)}>
            {children}
        </div>
    );
});