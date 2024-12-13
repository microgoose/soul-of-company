import {getAllRoles} from "@/entities/role";
import {OptionType} from "@/shared/ui/select";
import {useEffect, useState} from "react";
import {getAllAuthorities} from "@/entities/authority";

export const useRolesFormFieldData = () => {
    const [rolesOptions, setRolesOptions] = useState<OptionType[]>([]);
    const [authoritiesOptions, setAuthoritiesOptions] = useState<OptionType[]>([]);

    //todo loading state

    const getRolesOptions = async () => {
        return await getAllRoles().then(roles => roles.map(role => ({
            value: role.id,
            label: role.name,
        })));
    }

    const getAuthoritiesOptions = async (): Promise<OptionType[]> => {
        return await getAllAuthorities().then(authorities => authorities.map(authority => ({
            value: authority.id,
            label: authority.name,
        })));
    }

    useEffect(() => {
        getRolesOptions().then(setRolesOptions);
        getAuthoritiesOptions().then(setAuthoritiesOptions);
    }, []);

    return { rolesOptions, authoritiesOptions };
}