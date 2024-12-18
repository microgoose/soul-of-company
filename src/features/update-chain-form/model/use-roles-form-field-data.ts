import {getAllRoles} from "@/entities/role";
import {OptionType} from "@/shared/ui/select";
import {useEffect, useState} from "react";

export const useRolesFormFieldData = () => {
    const [rolesOptions, setRolesOptions] = useState<OptionType[]>([]);

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