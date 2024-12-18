import styles from './SequenceItem.module.scss';

interface SequenceItemProps {
    position: string,
    text: string,
}

export const SequenceItem = ({ position, text }: SequenceItemProps) => {
    return (
        <div className={styles.sequenceItem}>
            <p className={styles.position}>{position}</p>
            <p className={styles.text}>{text}</p>
        </div>
    );
};