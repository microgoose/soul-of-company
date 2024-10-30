import styles from './UsersManagementTable.module.scss';
import {AddUserButton} from "@/features/user-management";
import {getAllUsers, UsersList, UsersTable} from "@/entities/user";
import {useEffect, useState} from "react";
import classNames from "classnames";
import {useNeedVerticalScrollbar} from "@/shared/hooks/use-need-scrollbar.ts";

export const UsersManagementWidget = () => {
    const [userList, setUserList] = useState<UsersList>([]);
    const {elementRef, needScrollbar} = useNeedVerticalScrollbar(userList);

    useEffect(() => {
        getAllUsers().then(list => setUserList(list));
    }, []);

    return (
        <div className={styles.userManagementTable}>
            <section className={styles.controlsSection}>
                <div/>
                <AddUserButton/>
            </section>
            <section
                ref={elementRef}
                className={classNames(
                    styles.usersTableSection,
                    {[styles.hasScroll]: needScrollbar}
                )}
            >
                <UsersTable users={userList}/>
            </section>
        </div>
    );
};