import {getAllRoles} from "@/entities/role";
import {useEffect, useState} from "react";
import {OptionsType} from "@/shared/ui/select";

export const useRolesFormFieldData = () => {
    const [rolesOptions, setRolesOptions] = useState<OptionsType<number>>([]);

    //todo loading state

    const getRolesOptions = async () => {
        return await getAllRoles().then(roles => roles.map(role => ({
            value: role.id,
            label: role.name,
        })));
    }

    useEffect(() => {
        getRolesOptions().then(setRolesOptions);
    }, []);

    return { rolesOptions };
}