import styles from './UsersManagementWidget.module.scss';
import {ControlsSection} from "../controls-section/ControlsSection.tsx";
import {TableSection} from "../table-section/TableSection.tsx";
import {UsersControllerContext, useUsersController} from "@/entities/user/model/users-controller.ts";
import {useEffect} from "react";

export const UsersManagementWidget = () => {
    const usersController = useUsersController();

    //todo loading state
    useEffect(() => usersController.load(), []);
    
    return (
        <UsersControllerContext.Provider value={usersController}>
            <div className={styles.userManagementWidget}>
                <ControlsSection />
                <TableSection/>
            </div>
        </UsersControllerContext.Provider>
    );
};