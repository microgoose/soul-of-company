import {useState} from "react";
import {Account} from "@/shared/types/entities";
import {getAllAccounts} from "@/entities/account";

export interface RolesController {
    roles: Account[];
    isLoading: boolean;
    error: Error | null;
    load: () => void;
    update: (Account: Account) => void;
    remove: (Account: Account) => void;
}

export const useAccountController = (): RolesController => {
    const [AccountList, setAccountList] = useState<Account[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const load = () => {
        setIsLoading(true);
        setError(null);

        getAllAccounts()
            .then(setAccountList)
            .catch(setError)
            .finally(() => setIsLoading(false));
    };

    const update = (account: Account) => {
        setAccountList(roles => roles.map(accountItem => {
            if (accountItem.id === account.id) {
                return account;
            }

            return accountItem;
        }));
    };

    const remove = (role: Account) => {
        setAccountList(roles => roles.filter(accountItem => accountItem.id !== role.id));
    }

    return {roles: AccountList, isLoading, error, load, update, remove};
}