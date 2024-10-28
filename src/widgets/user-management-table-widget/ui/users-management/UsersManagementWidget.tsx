import styles from './UsersManagementTable.module.scss';
import {AddUserButton} from "@/features/user-management";
import {getAllUsers, UsersList, UsersTable} from "@/entities/user";
import {useEffect, useRef, useState} from "react";
import classNames from "classnames";

export const UsersManagementWidget = () => {
    const [userList, setUserList] = useState<UsersList>([]);
    const usersTableSection = useRef<HTMLElement | null>(null);
    const [hasScrollbar, setHasScrollbar] = useState(false);

    useEffect(() => {
        getAllUsers().then(list => setUserList(list));
    }, []);

    useEffect(() => {
        const checkScrollbar = () => {
            if (usersTableSection.current) {
                const element = usersTableSection.current;
                const hasVerticalScrollbar = element.scrollHeight > element.clientHeight;
                setHasScrollbar(hasVerticalScrollbar);
            }
        };

        setTimeout(() => checkScrollbar(), 0);
        window.addEventListener('resize', checkScrollbar);
        return () => window.removeEventListener('resize', checkScrollbar);
    }, [usersTableSection, userList]);

    return (
        <div className={styles.userManagementTable}>
            <section className={styles.controlsSection}>
                <div/>
                <AddUserButton/>
            </section>
            <section
                className={classNames(
                    styles.usersTableSection,
                    {[styles.hasScroll]: hasScrollbar}
                )}
                ref={usersTableSection}
            >
                <UsersTable users={userList}/>
            </section>
        </div>
    );
};