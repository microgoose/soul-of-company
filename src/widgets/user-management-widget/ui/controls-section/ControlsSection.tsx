import styles from './ControlsSection.module.scss';
import {CreateUserModalForm} from "@/features/user-form";
import {useToggle} from "@/shared/hooks/use-toggle.ts";
import {CreateUser} from "../create-user/CreateUser.tsx";
import {useContextSafe} from "@/shared/hooks/use-context-safe.ts";
import {User, UsersControllerContext} from "@/entities/user";

export const ControlsSection = () => {
    const { isOpen, open, close } = useToggle(false);
    const usersController = useContextSafe(UsersControllerContext);

    const handleSubmit = (user?: User) => {
        if (user) {
            usersController.insert(user);
        }

        close();
    };

    return (
        <section className={styles.controlsSection}>
            <div/>
            <CreateUser onClick={open}/>

            <CreateUserModalForm isOpen={isOpen} onClose={handleSubmit}/>
        </section>
    );
};