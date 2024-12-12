import {t} from "i18next";
import {
    SortingType,
    Table,
    TableBody,
    TableHeader,
    TableHeaders,
    TableHeaderSorter,
    TableHeaderType,
    useTable,
    useTableSorting
} from "@/shared/ui/table";

import {UserRow} from "./UserRow.tsx";
import {ReactNode, useEffect} from "react";
import {User} from "@/shared/types/entities";

interface UsersTableProps {
    users: User[],
    actions?: (user: User) => ReactNode,
}

const headers: TableHeaderType<User> = [
    'roles',
    'cities',
    'telegramId',
    'login',
    'fio',
    'phone',
    'birthday',
    'hiringDate',
];

export const UsersTable = ({users, actions}: UsersTableProps) => {
    const tableController = useTable<User>({headers, rows: users});
    const sortingController = useTableSorting<User>(tableController, users);
    
    useEffect(() => {
        if (users.length && !sortingController.columnName) {
            sortingController.changeSorting(headers[7], SortingType.DESC);
        } else {
            sortingController.sort();
        }
    }, [users]);

    return (
        <Table>
            <TableHeaders>
                {tableController.headers.map((header, index) => (
                    <TableHeader key={index}>
                        <TableHeaderSorter
                            sortType={sortingController.getColumnSortType(header)}
                            onSort={() => sortingController.changeSorting(header)}
                        >
                            {t(`user.${header}`)}
                        </TableHeaderSorter>
                    </TableHeader>
                ))}

                <TableHeader/>
            </TableHeaders>
            <TableBody>
                {tableController.rows.map((user, index) => (
                    <UserRow key={index} user={user} actions={actions} />
                ))}
            </TableBody>
        </Table>
    );
}