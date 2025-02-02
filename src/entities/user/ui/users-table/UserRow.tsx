import {CopyText} from "@/shared/components/copy-text";
import {User} from "@/shared/types/entities";
import {SimpleList} from "@/shared/ui/list";
import {TableRow} from "@/shared/ui/table";
import {TableCell} from "@/shared/ui/table/ui/table-cell/TableCell.tsx";
import {formatDate} from "@/shared/utils/date-utils.ts";
import {ReactNode, useMemo} from "react";
import {UserTelegramIdActivity} from "../user-telegram-id-activity/UserTelegramIdActivity.tsx";
import style from './UsersTable.module.scss';

interface UserRowProps {
    user: User,
    actions?: (user: User) => ReactNode,
}

export const UserRow = ({user, actions}: UserRowProps) => {
    const cities = useMemo(() => user.cities.map(city => city.name), [user]);
    const roles = useMemo(() => user.roles.map(role => role.name), [user]);

    return (
        <TableRow disabled={!!user.blocked}>
            <TableCell>
                <SimpleList list={roles}/>
            </TableCell>
            <TableCell>
                <SimpleList list={cities}/>
            </TableCell>
            <TableCell>
                {/*TODO* replace fake data */}
                <UserTelegramIdActivity isActive={Math.random() < 0.5} disabled={!!user.blocked}>
                    {user.telegramId}
                </UserTelegramIdActivity>
            </TableCell>
            <TableCell className={style.loginCell}>
                <CopyText text={user.login} disabled={!!user.blocked}/>
            </TableCell>
            <TableCell>
                {user.fio}
            </TableCell>
            <TableCell>
                {user.phone}
            </TableCell>
            <TableCell>
                {formatDate(user.birthday)}
            </TableCell>
            <TableCell>
                {formatDate(user.hiringDate)}
            </TableCell>
            <TableCell smallest>
                {actions && actions(user)}
            </TableCell>
        </TableRow>
    );
}