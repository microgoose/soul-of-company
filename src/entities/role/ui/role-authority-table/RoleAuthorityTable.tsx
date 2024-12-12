import {t} from "i18next";
import {Table, TableBody, TableHeader, TableHeaders, TableHeaderType, useTable,} from "@/shared/ui/table";
import {RoleAuthorityRow} from "@/entities/role/ui/role-authority-table/RoleAuthorityRow.tsx";
import {ReactNode} from "react";
import {RoleAuthorities} from "@/shared/types/entities";

interface UsersTableProps {
    roleAuthorities: RoleAuthorities[],
    actions?: (roleAuthorities: RoleAuthorities) => ReactNode,
}

const headers: TableHeaderType<RoleAuthorities> = ['role', 'authorities'];

export const RoleAuthorityTable = ({roleAuthorities, actions}: UsersTableProps) => {
    const tableController = useTable<RoleAuthorities>({headers, rows: roleAuthorities});

    return (
        <Table>
            <TableHeaders>
                {tableController.headers.map((header, index) => (
                    <TableHeader key={index}>
                        {t(`roleAuthorities.${header}`)}
                    </TableHeader>
                ))}

                <TableHeader/>
            </TableHeaders>
            <TableBody>
                {tableController.rows.map((row, index) => (
                    <RoleAuthorityRow key={index} roleAuthorities={row} actions={actions} />
                ))}
            </TableBody>
        </Table>
    );
}