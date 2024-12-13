import {useState} from "react";
import {getAllRoleAuthorities} from "@/entities/role/api/role-api.ts";
import {RoleAuthorities} from "@/shared/types/entities";

export interface UseRoleAuthoritiesController {
    roles: RoleAuthorities[];
    isLoading: boolean;
    error: Error | null;
    load: () => void;
    insert: (roleAuthorities: RoleAuthorities) => void;
    update: (roleAuthorities: RoleAuthorities) => void;
    remove: (roleAuthorities: RoleAuthorities) => void;
}

export const useRoleAuthoritiesController = (): UseRoleAuthoritiesController => {
    const [roleAuthoritiesList, setRoleAuthoritiesList] = useState<RoleAuthorities[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const insert = (newRal: RoleAuthorities) => {
        const [existRoleAuthority] =
            roleAuthoritiesList.filter(ral => ral.role.id === newRal.role.id);

        if (existRoleAuthority) {
            const authoritiesIds = newRal.authorities.map(a => a.id);
            const existAuthorities =
                existRoleAuthority.authorities.filter(era => !authoritiesIds.includes(era.id));

            const filteredRoleAuthoritiesList =
                roleAuthoritiesList.filter(ral => ral.role.id !== newRal.role.id);
            const insertRal = {
                role: newRal.role,
                authorities: [
                    ...existAuthorities,
                    ...newRal.authorities,
                ]
            };

            setRoleAuthoritiesList([insertRal, ...filteredRoleAuthoritiesList]);
        } else {
            setRoleAuthoritiesList([newRal, ...roleAuthoritiesList]);
        }
    };

    const load = () => {
        setIsLoading(true);
        setError(null);

        getAllRoleAuthorities()
            .then(setRoleAuthoritiesList)
            .catch(setError)
            .finally(() => setIsLoading(false));
    };

    const update = (role: RoleAuthorities) => {
        setRoleAuthoritiesList(roles => roles.map(roleItem => {
            if (roleItem.role.id === role.role.id) {
                return role;
            }

            return roleItem;
        }));
    };

    const remove = (role: RoleAuthorities) => {
        setRoleAuthoritiesList(roles => roles.filter(roleItem => roleItem.role.id !== role.role.id));
    }

    return {roles: roleAuthoritiesList, isLoading, error, insert, load, update, remove};
}