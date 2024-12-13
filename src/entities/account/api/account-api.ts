import {api} from '@/app/api'
import {Account, AccountStatus, AccountStatusCode, City, File, Organization, Person} from "@/shared/types/entities";
import {toDate} from "@/shared/utils/date-utils.ts";

interface GetAllAccountsData {
    id: number,
    number: number,
    date: string,
    counterparty: Organization,
    city: City,
    amount: number,
    justification: string,
    files: File[],
    creator: Person,
    status: AccountStatus,
    statusComment: string | null,
    comment: string | null,
}

export const getAllAccounts = async (): Promise<Account[]> => {
    const accounts = await api.get<GetAllAccountsData[]>('db/accounts.json').json();
    const mapStatus = (status: AccountStatus): AccountStatus => ({
        ...status,
        code: AccountStatusCode[status.code]
    });

    return accounts.map(account => ({
        ...account,
        date: toDate(account.date),
        status: mapStatus(account.status),
    }));
}