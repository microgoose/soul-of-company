import {getAllRoles} from "@/entities/role/api/role-api.ts";
import {getAllCities} from "@/entities/city/api/city-api.ts";
import {OptionsType} from "@/shared/ui/select";
import {useEffect, useState} from "react";

export const useUserFormFieldsData = () => {
    const [rolesOptions, setRolesOptions] = useState<OptionsType<number>>([]);
    const [citiesOptions, setCitiesOptions] = useState<OptionsType<number>>([]);

    //todo loading state

    const getRolesOptions = async (): Promise<OptionsType<number>> => {
        return await getAllRoles().then(roles => roles.map(role => ({
            value: role.id,
            label: role.name,
        })));
    }

    const getCitiesOptions = async (): Promise<OptionsType<number>> => {
        return await getAllCities().then(cities => cities.map(city => ({
            value: city.id,
            label: city.name,
        })));
    }

    useEffect(() => {
        getRolesOptions().then(setRolesOptions);
        getCitiesOptions().then(setCitiesOptions);
    }, []);

    return { rolesOptions, citiesOptions };
}