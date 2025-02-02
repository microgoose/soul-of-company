import {aiHistoryHeaders} from "@/entities/ai/model/ai-history-table-headers.ts";
import {AiHistoryHeader} from "@/entities/ai/ui/ai-table/AiHistoryHeader.tsx";
import {AiHistoryRow} from "@/entities/ai/ui/ai-table/AiHistoryRow.tsx";
import {AIHistory} from "@/shared/types/entities";
import {Table, TableBody, TableHeaders, useTable, useTableSorting} from "@/shared/ui/table";


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
                    <AiHistoryHeader
                        key={index}
                        header={header}
                        controller={sortingController}
                    />
                }
            </TableHeaders>
            <TableBody>
                {(openAiHistory, index) =>
                    <AiHistoryRow
                        key={index}
                        openAiHistory={openAiHistory as AIHistory}
                    />
                }
            </TableBody>
        </Table>
    );
}