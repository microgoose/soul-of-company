import {getAllAuthorities} from "@/entities/authority";
import {getAllRoles} from "@/entities/role";
import {OptionsType} from "@/shared/ui/select";
import {useEffect, useState} from "react";

export const useRoleAuthoritiesFormFieldData = () => {
    const [rolesOptions, setRolesOptions] = useState<OptionsType<number>>([]);
    const [authoritiesOptions, setAuthoritiesOptions] = useState<OptionsType<number>>([]);

    //todo loading state

    const getRolesOptions = async (): Promise<OptionsType<number>> => {
        return await getAllRoles().then(roles => roles.map(role => ({
            value: role.id,
            label: role.name,
        })));
    }

    const getAuthoritiesOptions = async (): Promise<OptionsType<number>> => {
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