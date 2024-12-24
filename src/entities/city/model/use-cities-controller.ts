import {useQuery} from "@tanstack/react-query";
import {getAllCities} from "@/entities/city";
import {useCallback, useEffect, useState} from "react";
import {City} from "@/shared/types/entities";

export const useCitiesController = () => {
    const [cities, setCities] = useState<City[]>([]);
    const { data = [], isLoading, error } = useQuery<City[]>({
        queryKey: ['cities'],
        queryFn: () => getAllCities(),
    });

    const update = useCallback((city: City) => {
        setCities((list) => list.map((item) => item.id === city.id? city : item));
    }, []);

    const remove = useCallback((city: City) => {
        setCities((list) => list.filter((item) => item.id !== city.id));
    }, []);

    const add = useCallback((city: City) => {
        setCities(prevState => [...prevState, city]);
    }, []);

    useEffect(() => {
        setCities(data);
    }, [data, setCities]);

    return { cities, isLoading, error, update, remove, add };
}