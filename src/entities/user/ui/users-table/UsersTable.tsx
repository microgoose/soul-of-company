import {User} from "@/shared/types/entities";
import {SortingType, Table, TableBody, TableHeaders, useTable, useTableSorting} from "@/shared/ui/table";
import {ReactNode} from "react";
import {userHeaders, userHeadersList} from "../../model/user-headers.ts";
import {UserHeader} from "./UserHeader.tsx";

import {UserRow} from "./UserRow.tsx";

interface UsersTableProps {
    users: User[],
    actions?: (user: User) => ReactNode,
}

export const UsersTable = ({users, actions}: UsersTableProps) => {
    const tableController = useTable({
        headers: userHeadersList,
        rows: users
    });
    const sortingController = useTableSorting<User>({
        controller: tableController,
        sourceRows: users,
        defaultSort: {
            column: userHeaders.hiringDate,
            sortType: SortingType.DESC,
        },
        mapper: {
            roles: (row) => row.roles.length,
            cities: (row) => row.cities.length,
        },
    });

    return (
        <Table controller={tableController}>
            <TableHeaders>
                {(header, index) => (
                    <UserHeader key={index} header={header} controller={sortingController}/>
                )}
            </TableHeaders>
            <TableBody>
                {(user, index) => (
                    <UserRow key={index} user={user as User} actions={actions} />
                )}
            </TableBody>
        </Table>
    );
}