import {AccountHeader} from "@/entities/account/ui/accounts-table/AccountHeader.tsx";
import {AccountRow} from "@/entities/account/ui/accounts-table/AccountRow.tsx";
import {Account} from "@/shared/types/entities";
import {Table, TableBody, TableHeaders, useTable, useTableSorting} from "@/shared/ui/table";
import {ReactNode} from "react";
import {accountTableHeadersList} from "./model/account-table-headers.ts";

interface AccountsTableProps {
    accounts: Account[],
    actionsCell?: (account: Account) => ReactNode,
    fileCell?: (account: Account) => ReactNode,
}

export const AccountsTable = ({ accounts, actionsCell, fileCell }: AccountsTableProps) => {
    const tableController = useTable({
        headers: accountTableHeadersList,
        rows: accounts
    });
    const sortingController = useTableSorting<Account>({
        controller: tableController,
        sourceRows: accounts,
        mapper: {
            counterparty: (row) => row.counterparty.shortName,
            files: (row) => row.files.length,
            status: (row) => row.status.name,
            creator: (row) => row.creator.fio
        },
    });

    return (
        <Table controller={tableController}>
            <TableHeaders>
                {(header, index) =>
                    <AccountHeader
                        key={index}
                        header={header}
                        controller={sortingController}
                    />
                }
            </TableHeaders>
            <TableBody>
                {(user, index) =>
                    <AccountRow
                        key={index}
                        account={user as Account}
                        fileCell={fileCell}
                        actionsCell={actionsCell}
                    />
                }
            </TableBody>
        </Table>
    );
}