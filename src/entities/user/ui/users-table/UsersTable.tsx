import {t} from "i18next";
import {User, UsersList} from "@/entities/user";
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaders,
    TableHeaderType,
    useTable,
    useTableSorting
} from "@/shared/ui/table";

import {UserRow} from "./user-table-row/UserRow.tsx";
import style from './UsersTable.module.scss';

interface UsersTableProps {
    users: UsersList
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

export const UsersTable = ({ users }: UsersTableProps) => {
    const tableController = useTable<User>({ headers, rows: users });
    const sortingController = useTableSorting<User>(tableController, users);
    
    return (
        <Table className={style.usersTable}>
            <TableHeaders>
                {tableController.headers.map((header, index) => (
                    <TableHeader
                        key={index}
                        sortType={sortingController.getSortType(header)}
                        onSortClick={sortingController.changeSorting(header)}
                        children={t(`user.${header}`)}
                    />
                ))}
                <TableHeader withSorting={false}/>
            </TableHeaders>
            <TableBody>
                {tableController.rows.map((user, index) => (
                    <UserRow key={index} user={user} />
                ))}
            </TableBody>
        </Table>
    );
}