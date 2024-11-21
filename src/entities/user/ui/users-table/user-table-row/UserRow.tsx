import style from './UserRow.module.scss';
import type {User} from "@/entities/user";
import {SimpleList} from "@/shared/ui/list";
import {CopyText} from "@/shared/ui/copy-text";
import {UserTelegramIdActivity} from "../../user-telegram-id-activity/UserTelegramIdActivity.tsx";
import {TableCell} from "@/shared/ui/table/ui/table-cell/TableCell.tsx";
import {TableRow} from "@/shared/ui/table";
import {ReactNode, useMemo} from "react";
import dayjs from "dayjs";

interface UserRowProps {
    user: User,
    actions?: (user: User) => ReactNode,
}

export const UserRow = ({user, actions}: UserRowProps) => {
    const cities = useMemo(() => user.cities.map(city => city.name), [user]);
    const roles = useMemo(() => user.roles.map(role => role.name), [user]);

    return (
        <TableRow disabled={!!user.blocked}>
            <TableCell className={style.usersTableCell}>
                <div className={style.cellFrame}>
                    <SimpleList list={roles}/>
                </div>
            </TableCell>
            <TableCell className={style.usersTableCell}>
                <div className={style.cellFrame}>
                    <SimpleList list={cities}/>
                </div>
            </TableCell>
            <TableCell className={style.usersTableCell}>
                <div className={style.cellFrame}>
                    {/*TODO* replace fake data */}
                    <UserTelegramIdActivity isActive={Math.random() < 0.5} disabled={!!user.blocked}>
                        {user.telegramId}
                    </UserTelegramIdActivity>
                </div>
            </TableCell>
            <TableCell className={style.usersTableCell}>
                <CopyText text={user.login} disabled={!!user.blocked}/>
            </TableCell>
            <TableCell className={style.usersTableCell}>
                <div className={style.cellFrame}>
                    {user.fio}
                </div>
            </TableCell>
            <TableCell className={style.usersTableCell}>
                <div className={style.cellFrame}>
                    {user.phone}
                </div>
            </TableCell>
            <TableCell className={style.usersTableCell}>
                <div className={style.cellFrame}>
                    {dayjs(user.birthday).format('DD.MM.YYYY')}
                </div>
            </TableCell>
            <TableCell className={style.usersTableCell}>
                <div className={style.cellFrame}>
                    {dayjs(user.hiringDate).format('DD.MM.YYYY')}
                </div>
            </TableCell>
            <TableCell className={style.usersTableCell}>
                {actions && actions(user)}
            </TableCell>
        </TableRow>
    );
}