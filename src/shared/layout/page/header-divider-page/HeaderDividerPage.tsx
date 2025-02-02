import {HeaderPage} from "@/shared/layout";
import {DividerTitle} from "@/shared/ui/divider-title";
import classNames from "classnames";
import {ReactNode} from "react";
import styles from "./HeaderDividerPage.module.scss";

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