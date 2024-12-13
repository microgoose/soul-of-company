import {Table, TableBody, TableHeaders, useTable, useTableSorting,} from "@/shared/ui/table";
import {RoleAuthorityRow} from "./RoleAuthorityRow.tsx";
import {ReactNode} from "react";
import {RoleAuthorities} from "@/shared/types/entities";
import {RoleAuthorityHeader} from "./RoleAuthorityHeader.tsx";
import {roleAuthorityHeadersList} from "./model/role-authority-headers.ts";

interface UsersTableProps {
    roleAuthorities: RoleAuthorities[],
    actions?: (roleAuthorities: RoleAuthorities) => ReactNode,
}

export const RoleAuthorityTable = ({roleAuthorities, actions}: UsersTableProps) => {
    const tableController = useTable({
        headers: roleAuthorityHeadersList,
        rows: roleAuthorities
    });
    const sortingController = useTableSorting<RoleAuthorities>({
        controller: tableController,
        sourceRows: roleAuthorities,
        mapper: {
            role: (row) => row.role.name,
            authorities: (row) => row.authorities.length,
        },
    });

    return (
        <Table controller={tableController}>
            <TableHeaders>
                {(header, index) => (
                    <RoleAuthorityHeader key={index} header={header} controller={sortingController}/>
                )}
            </TableHeaders>
            <TableBody>
                {(row, index) => (
                    <RoleAuthorityRow key={index} roleAuthorities={row} actions={actions} />
                )}
            </TableBody>
        </Table>
    );
}