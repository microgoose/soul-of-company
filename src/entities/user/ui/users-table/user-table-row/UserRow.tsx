import style from './UserRow.module.scss';
import type {User} from "@/entities/user";
import {SimpleList} from "@/shared/ui/list";
import {CopyText} from "@/shared/ui/text";
import {UserTelegramIdActivity} from "../../user-telegram-id-activity/UserTelegramIdActivity.tsx";
import {TableCell} from "@/shared/ui/table/ui/table-cell/TableCell.tsx";
import {TableRow} from "@/shared/ui/table";
import {TableCellActions} from "@/features/table-cell-actions";
import {formatDate} from "@/shared/utils/date-utils.ts";

export const UserRow = ({user}: {user: User}) => {
    return (
        <TableRow>
            <TableCell>
                <div className={style.cellFrame}>
                    <SimpleList list={user.roles}/>
                </div>
            </TableCell>
            <TableCell>
                <div className={style.cellFrame}>
                    <SimpleList list={user.cities}/>
                </div>
            </TableCell>
            <TableCell>
                <div className={style.cellFrame}>
                    {/*TODO* replace fake data */}
                    <UserTelegramIdActivity isActive={Math.random() < 0.5}>
                        {user.telegramId}
                    </UserTelegramIdActivity>
                </div>
            </TableCell>
            <TableCell>
                <CopyText text={user.login}/>
            </TableCell>
            <TableCell>
                <div className={style.cellFrame}>
                    {user.fio}
                </div>
            </TableCell>
            <TableCell>
                <div className={style.cellFrame}>
                    {user.phone}
                </div>
            </TableCell>
            <TableCell>
                <div className={style.cellFrame}>
                    {formatDate(user.birthday)}
                </div>
            </TableCell>
            <TableCell>
                <div className={style.cellFrame}>
                    {formatDate(user.hiringDate)}
                </div>
            </TableCell>
            <TableCell>
                <TableCellActions/>
            </TableCell>
        </TableRow>
    );
}