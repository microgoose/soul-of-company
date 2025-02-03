import {activateAiApi, deactivateAiApi, getAiApis} from "@/entities/ai";
import {useMutation, useQuery} from "@tanstack/react-query";

export const useAiApis = () => {
    const { data: aiApis, isLoading, refetch } = useQuery({
        queryKey: ['aiApis'],
        queryFn: getAiApis,
        initialData: [],
    });

    return { aiApis, isLoading, refetch };
};

export const useToggleAiApi = () => {
    const aiApis = useAiApis();

    const activateMutation = useMutation({
        mutationFn: activateAiApi,
        onSuccess: () => aiApis.refetch()
    });

    const deactivateMutation = useMutation({
        mutationFn: deactivateAiApi,
        onSuccess: () => aiApis.refetch(),
    });

    return {
        activate: activateMutation.mutate,
        deactivate: deactivateMutation.mutate,
        isLoading: aiApis.isLoading || deactivateMutation.isPending || activateMutation.isPending,
    };
};