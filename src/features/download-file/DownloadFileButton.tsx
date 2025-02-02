import {DownloadIcon} from "@/shared/assets";
import type {File} from '@/shared/types/entities';
import {EmptyButton} from "@/shared/ui/button";
import {TruncatedText} from "@/shared/ui/text/truncated-text/TruncatedText.tsx";
import styles from './DownloadFileButton.module.scss';

interface DownloadFileButtonProps {
    file: File
}

export const DownloadFileButton = ({ file }: DownloadFileButtonProps) => {
    return (
        <EmptyButton className={styles.fileButton}>
            <DownloadIcon/>
            <TruncatedText>
                {file.name}
            </TruncatedText>
        </EmptyButton>
    );
};