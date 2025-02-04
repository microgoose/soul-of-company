import {Page} from "@/shared/layout";
import classNames from "classnames";
import {ReactNode} from "react";
import styles from './Page.module.scss';

interface Props {
    className?: string,
    children: ReactNode
}

export const MonoPage = (props: Props) => {
    return (
        <Page {...props} className={classNames(styles.monoPage, props.className)}>
            {props.children}
        </Page>
    );
};