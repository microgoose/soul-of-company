import {useCallback} from "react";
import {t} from "i18next";
import {User, UsersControllerContext, UsersTable} from "@/entities/user";
import styles from './TableSection.module.scss';
import {UserRowActions} from "../user-row-actions/UserRowActions.tsx";
import {OuterVerticalScroll} from "@/shared/ui/scrollbar";
import {useContextSafe} from "@/shared/hooks/use-context-safe.ts";

export const TableSection = () => {
    const usersContext = useContextSafe(UsersControllerContext);
    const userRowActions = useCallback((user: User) => <UserRowActions user={user}/>, []);

    if (usersContext.isLoading) {
        return t('loading');
    }

    if (usersContext.error) {
        return usersContext.error.message;
    }

    return (
        <OuterVerticalScroll className={styles.tableSection}>
            <UsersTable users={usersContext.users} actions={userRowActions} />
        </OuterVerticalScroll>
    );
};