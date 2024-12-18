import {api} from "@/app/api.ts";
import {ChainLink} from "@/shared/types/entities";

export const getChain = (): Promise<ChainLink[]> => {
    return api.get<ChainLink[]>('db/chain.json').json();
}