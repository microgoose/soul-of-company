import {DividerTitle} from "@/shared/ui/divider-title";
import styles from "./HeaderDividerPage.module.scss";
import {HeaderPage} from "@/layout";
import {ReactNode} from "react";
import classNames from "classnames";

interface Props {
    title: string,
    className?: string,
    children: ReactNode
}

export const HeaderDividerPage = ({ title, className, children }: Props) => {
    return (
        <HeaderPage className={classNames(className, styles.headerDividerPage)}>
            <DividerTitle title={title}/>
            {children}
        </HeaderPage>
    );
};