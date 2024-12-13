import styles from './TruncatedText.module.scss';

interface TruncatedTextProps {
    children: string;
}

export const TruncatedText = ({ children }: TruncatedTextProps) => {
    return (
        <div className={styles.truncatedText} title={children}>
            {children}
        </div>
    );
};