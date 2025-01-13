import {ButtonEntity} from "@/shared/types/entities";
import {ReactNode} from "react";
import {Table, TableBody, TableHeaders, useTable, useTableSorting} from "@/shared/ui/table";
import {buttonEntitiesHeaders} from "@/entities/button-entity/model/button-entities-table-headers.ts";
import {ButtonEntityHeader} from './ButtonEntityHeader.tsx';
import {ButtonEntityRow} from "./ButtonEntityRow.tsx";

interface ButtonEntityTableProps {
    buttons: ButtonEntity[],
    updateCell: (button: ButtonEntity) => ReactNode,
    displayInputCell: (button: ButtonEntity) => ReactNode,
}

export const ButtonEntityTable = ({ buttons, updateCell, displayInputCell }: ButtonEntityTableProps) => {
    const tableController = useTable({
        headers: buttonEntitiesHeaders,
        rows: buttons
    });
    const sortingController = useTableSorting<ButtonEntity>({
        controller: tableController,
        sourceRows: buttons
    });

    return (
        <Table controller={tableController}>
            <TableHeaders>
                {(header, index) =>
                    <ButtonEntityHeader
                        key={index}
                        header={header}
                        controller={sortingController}
                    />
                }
            </TableHeaders>
            <TableBody>
                {(user, index) =>
                    <ButtonEntityRow
                        key={index}
                        button={user as ButtonEntity}
                        updateCell={updateCell}
                        displayInputCell={displayInputCell}
                    />
                }
            </TableBody>
        </Table>
    );
}