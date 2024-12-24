import styles from './ControlPanel.module.scss';
import {ReactNode} from "react";

interface ControlsSectionProps {
    children: ReactNode
}

export const ControlPanel = ({ children }: ControlsSectionProps) => {
    return (
        <section className={styles.controlPanel}>
            <div/>
            {children}
        </section>
    );
};