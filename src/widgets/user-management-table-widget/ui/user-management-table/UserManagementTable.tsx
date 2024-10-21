import styles from './UserManagementTable.module.scss';
import {AddUserButton} from "@/features/user-management";

export const UserManagementTable = () => {
    return (
        <div className={styles.userManagementTable}>
            <section className={styles.controlsSection}>
                <div/>
                <AddUserButton/>
            </section>
            <section className={styles.tableSection}>

            </section>
        </div>
    );
};