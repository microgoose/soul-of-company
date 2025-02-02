import {AIHistory} from "@/shared/types/entities";
import {TableCell, TableRow} from "@/shared/ui/table";
import {TextOpener} from "@/shared/ui/text/text-opener/TextOpener.tsx";
import {formatDateTime} from "@/shared/utils/time-utils.ts";
import {t} from "i18next";
import styles from './AiHistory.module.scss';

interface UserRowProps {
    openAiHistory: AIHistory
}

export const AiHistoryRow = ({openAiHistory}: UserRowProps) => {
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