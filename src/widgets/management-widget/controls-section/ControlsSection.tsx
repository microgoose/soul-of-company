import styles from './ControlsSection.module.scss';
import {ReactNode} from "react";

interface ControlsSectionProps {
    children: ReactNode
}

export const ControlsSection = ({ children }: ControlsSectionProps) => {
    return (
        <section className={styles.controlsSection}>
            <div/>
            {children}
        </section>
    );
};