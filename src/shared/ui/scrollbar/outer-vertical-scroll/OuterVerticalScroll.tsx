import styles from './OuterVerticalScroll.module.scss';
import {ReactNode} from "react";
import classNames from "classnames";
import {NeedScroll} from "@/shared/ui/scrollbar/need-scroll/NeedScroll.tsx";

interface OuterScrollProps {
    className?: string,
    needScrollClass?: string,
    children: ReactNode,
}

export const OuterVerticalScroll = ({className, needScrollClass, children}: OuterScrollProps) => {
    return (
        <NeedScroll
            className={classNames(className, styles.container)}
            needScrollClass={classNames(styles.hasScroll, needScrollClass)}
        >
            {children}
        </NeedScroll>
    );
};