import {getAllUsers, User, UsersList} from "@/entities/user";
import {createContext, useState} from "react";

export interface UsersController {
    users: UsersList;
    isLoading: boolean;
    error: Error | null;
    load: () => void;
    insert: (user: User) => void;
    update: (user: User) => void;
}

export const useUsersController = () => {
    const [users, setUsers] = useState<UsersList>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const insert = (user: User) => {
        setUsers([user, ...users]);
    };

    const load = () => {
        setIsLoading(true);
        setError(null);

        getAllUsers()
            .then(setUsers)
            .catch(setError)
            .finally(() => setIsLoading(false));
    };

    const update = (user: User) => {
        setUsers(users => users.map(userItem => {
            if (userItem.id === user.id) {
                return user;
            }

            return userItem;
        }));
    };

    return {users, isLoading, error, insert, load, update};
}

export const UsersControllerContext = createContext<UsersController | undefined>(undefined);