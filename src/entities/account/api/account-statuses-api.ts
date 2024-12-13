import {api} from '@/app/api'
import {AccountStatus} from "@/shared/types/entities";

export const getAllAccountStatuses = (): Promise<AccountStatus[]> => {
    return api.get<AccountStatus[]>('db/account-statuses.json').json();
}