import {AIHistory} from "@/shared/types/entities";
import {Table, TableBody, TableHeaders, useTable, useTableSorting} from "@/shared/ui/table";
import {aiHistoryHeaders} from "@/entities/ai/model/ai-history-table-headers.ts";
import {OpenAiHistoryHeader} from "@/entities/ai/ui/ai-table/OpenAiHistoryHeader.tsx";
import {OpenAiHistoryRow} from "@/entities/ai/ui/ai-table/OpenAiHistoryRow.tsx";


interface ButtonEntityTableProps {
    openAiHistory: AIHistory[]
}

export const AiHistoryTable = ({ openAiHistory }: ButtonEntityTableProps) => {
    const tableController = useTable({
        headers: aiHistoryHeaders,
        rows: openAiHistory
    });
    const sortingController = useTableSorting<AIHistory>({
        controller: tableController,
        sourceRows: openAiHistory,
        mapper: {
            fullName: (row) => row.user.fio,
        },
    });

    return (
        <Table controller={tableController}>
            <TableHeaders>
                {(header, index) =>
                    <OpenAiHistoryHeader
                        key={index}
                        header={header}
                        controller={sortingController}
                    />
                }
            </TableHeaders>
            <TableBody>
                {(openAiHistory, index) =>
                    <OpenAiHistoryRow
                        key={index}
                        openAiHistory={openAiHistory as AIHistory}
                    />
                }
            </TableBody>
        </Table>
    );
}