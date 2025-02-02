import {getAllRoles} from "@/entities/role";
import {OptionsType} from "@/shared/ui/select";
import {useQuery} from "@tanstack/react-query";

export const useRoleOptions = () => {
    const { data: roleOptions = [] } = useQuery<OptionsType<number>>({
        queryKey: ['roleOptions'],
        queryFn: async () => {
            const roles = await getAllRoles();
            return roles.map(r => ({ value: r.id, label: r.name }));
        },
    });

    return roleOptions;
}