import {OpenAiHistory} from "@/shared/types/entities";
import {Table, TableBody, TableHeaders, useTable, useTableSorting} from "@/shared/ui/table";
import {openAiHistoryHeaders} from "@/entities/open-ai/ui/open-ai-table/model/open-ai-history-table-headers.ts";
import {OpenAiHistoryHeader} from "@/entities/open-ai/ui/open-ai-table/OpenAiHistoryHeader.tsx";
import {OpenAiHistoryRow} from "@/entities/open-ai/ui/open-ai-table/OpenAiHistoryRow.tsx";


interface ButtonEntityTableProps {
    openAiHistory: OpenAiHistory[]
}

export const OpenAiHistoryTable = ({ openAiHistory }: ButtonEntityTableProps) => {
    const tableController = useTable({
        headers: openAiHistoryHeaders,
        rows: openAiHistory
    });
    const sortingController = useTableSorting<OpenAiHistory>({
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
                        openAiHistory={openAiHistory as OpenAiHistory}
                    />
                }
            </TableBody>
        </Table>
    );
}