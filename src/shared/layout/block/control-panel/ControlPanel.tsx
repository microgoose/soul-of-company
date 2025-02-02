import {ReactNode} from "react";
import styles from './ControlPanel.module.scss';

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