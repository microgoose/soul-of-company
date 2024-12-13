import {TableCell} from "@/shared/ui/table/ui/table-cell/TableCell.tsx";
import {TableRow} from "@/shared/ui/table";
import {ReactNode} from "react";
import {formatDate} from "@/shared/utils/date-utils.ts";
import {Account} from "@/shared/types/entities";
import {toMoney} from "@/shared/utils/money-utils.ts";
import {AccountStatus} from "@/entities/account";

interface UserRowProps {
    account: Account,
    actionsCell?: (account: Account) => ReactNode,
    fileCell?: (account: Account) => ReactNode,
}

export const AccountRow = ({account, actionsCell, fileCell}: UserRowProps) => {
    return (
        <TableRow>
            <TableCell>{account.number}</TableCell>
            <TableCell>{formatDate(account.date)}</TableCell>
            <TableCell>{account.counterparty.shortName}</TableCell>
            <TableCell>{account.city.name}</TableCell>
            <TableCell>{toMoney(account.amount)}</TableCell>
            <TableCell>{account.justification}</TableCell>
            <TableCell>
                {fileCell && fileCell(account)}
            </TableCell>
            <TableCell>{account.creator.fio}</TableCell>
            <TableCell>
                <AccountStatus account={account}/>
            </TableCell>
            <TableCell>{account.comment}</TableCell>
            <TableCell smallest>
                {actionsCell && actionsCell(account)}
            </TableCell>
        </TableRow>
    );
}