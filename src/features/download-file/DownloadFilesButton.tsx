import {DownloadFileButton} from "@/features/download-file/index.ts";
import type {File} from "@/shared/types/entities";
import styles from './DownloadFileButton.module.scss';

interface DownloadFilesButtonProps {
    files: File[]
}

export const DownloadFilesButton = ({ files }: DownloadFilesButtonProps) => {
    return (
        <div className={styles.filesContainer}>
            {files.map((file, index) => <DownloadFileButton key={index} file={file}/>)}
        </div>
    );
}