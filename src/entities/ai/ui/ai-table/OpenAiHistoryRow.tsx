import {AIHistory} from "@/shared/types/entities";
import {TableCell, TableRow} from "@/shared/ui/table";
import styles from './OpenAiHistory.module.scss';
import {formatDateTime} from "@/shared/utils/time-utils.ts";
import {t} from "i18next";
import {TextOpener} from "@/shared/ui/text/text-opener/TextOpener.tsx";

interface UserRowProps {
    openAiHistory: AIHistory
}

export const OpenAiHistoryRow = ({openAiHistory}: UserRowProps) => {
    return (
        <TableRow className={styles.openAiHistoryRow}>
            <TableCell>
                {openAiHistory.user.fio}
            </TableCell>
            <TableCell>
                {formatDateTime(openAiHistory.time)}
            </TableCell>
            <TableCell>
                {openAiHistory.request}
            </TableCell>
            <TableCell>
                <TextOpener
                    maxHeight={108}
                    openText={t('AIHistory.actions.openResponse')}
                    closeText={t('AIHistory.actions.closeResponse')}
                >
                    {openAiHistory.response}
                </TextOpener>
            </TableCell>
        </TableRow>
    );
};