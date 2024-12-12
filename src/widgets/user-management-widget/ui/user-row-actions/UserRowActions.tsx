import {User, UsersControllerContext} from "@/entities/user";
import styles from './UserRowActions.module.scss';
import {UpdateUserModalForm} from "@/features/user-form";
import {useToggle} from "@/shared/hooks/use-toggle.ts";
import {useCallback} from "react";
import {EditUser} from "../EditUser.tsx";
import {BlockUser} from "../BlockUser.tsx";
import {useContextSafe} from "@/shared/hooks/use-context-safe.ts";

interface TableCellActionsProps {
    user: User
}

export const UserRowActions = ({ user }: TableCellActionsProps) => {
    const { isOpen, open, close } = useToggle(false);
    const usersContext = useContextSafe(UsersControllerContext);

    const blockUser = useCallback((blocked: boolean) => {
        usersContext.update({ ...user, blocked: blocked });
    }, [user, usersContext]);

    const updateUser = useCallback((user?: User) => {
        if (user) {
            usersContext.update(user);
        }
        
        close();
    }, [close, usersContext]);
    
    return (
        <>
            <div className={styles.actionCell}>
                <EditUser onClick={open}/>
                <BlockUser blocked={user.blocked} onChange={blockUser}/>
            </div>
            
            <UpdateUserModalForm user={user} isOpen={isOpen} onClose={updateUser}/>
        </>
    );
};