import {getAllRoles} from "@/entities/role/api/role-api.ts";
import {getAllCities} from "@/entities/city/api/city-api.ts";
import {OptionType} from "@/shared/ui/select";
import {useEffect, useState} from "react";

export const useUserFormFieldsData = () => {
    const [rolesOptions, setRolesOptions] = useState<OptionType[]>([]);
    const [citiesOptions, setCitiesOptions] = useState<OptionType[]>([]);

    //todo loading state

    const getRolesOptions = async () => {
        return await getAllRoles().then(roles => roles.map(role => ({
            value: role.id,
            label: role.name,
        })));
    }

    const getCitiesOptions = async (): Promise<OptionType[]> => {
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