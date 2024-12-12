import {getAllUsers} from "@/entities/user";
import {createContext, useState} from "react";
import {User} from "@/shared/types/entities";

export interface UsersController {
    users: User[];
    isLoading: boolean;
    error: Error | null;
    load: () => void;
    insert: (user: User) => void;
    update: (user: User) => void;
    remove: (user: User) => void;
}

export const useUsersController = () => {
    const [users, setUsers] = useState<User[]>([]);
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

    const remove = (user: User) => {
        setUsers(users => users.filter(userItem => userItem.id !== user.id));
    }

    return {users, isLoading, error, insert, load, update, remove };
}

export const UsersControllerContext = createContext<UsersController | undefined>(undefined);