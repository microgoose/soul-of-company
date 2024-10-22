import styles from './UsersManagementTable.module.scss';
import {AddUserButton} from "@/features/user-management";
import {getAllUsers, UsersList, UsersTable} from "@/entities/user";
import {useEffect, useState} from "react";

export const UsersManagementWidget = () => {
    const [userList, setUserList] = useState<UsersList>([]);

    useEffect(() => {
        getAllUsers().then(list => setUserList(list));
    }, []);

    return (
        <div className={styles.userManagementTable}>
            <div className={styles.centeringContainer}>
                <section className={styles.controlsSection}>
                    <div/>
                    <AddUserButton/>
                </section>
                <UsersTable users={userList}/>
            </div>
        </div>
    );
};