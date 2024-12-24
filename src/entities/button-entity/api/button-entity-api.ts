import {api} from "@/app/api.ts";
import {ButtonEntity} from "@/shared/types/entities/button-entity.types.ts";

export const getAllButtonEntities = (): Promise<ButtonEntity[]> => {
    return api.get<ButtonEntity[]>('db/buttons-entities.json').json();
}