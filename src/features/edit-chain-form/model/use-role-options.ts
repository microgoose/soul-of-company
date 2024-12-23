import {OptionsType} from "@/shared/ui/select";
import {useQuery} from "@tanstack/react-query";
import {getAllRoles} from "@/entities/role";

export const useRoleOptions = () => {
    const { data: roleOptions = [] } = useQuery<OptionsType<number>>({
        queryKey: ['roles'],
        queryFn: async () => {
            const roles = await getAllRoles();
            return roles.map(r => ({ value: r.id, label: r.name }));
        },
    });

    return roleOptions;
}