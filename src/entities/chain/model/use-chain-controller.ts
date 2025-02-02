import {getChain} from "@/entities/chain";
import {ChainLink} from "@/shared/types/entities";
import {useState} from "react";

export interface UseChainController {
    links: ChainLink[];
    isLoading: boolean;
    error: Error | null;
    load: () => void;
    setLinks: (link: ChainLink[]) => void;
    insert: (link: ChainLink, index: number) => void;
    update: (link: ChainLink) => void;
    remove: (link: ChainLink) => void;
}

export const useChainController = (): UseChainController => {
    const [links, setLinks] = useState<ChainLink[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const insert = (entity: ChainLink, index: number) => {
        setLinks((prevLinks) => {
            const newLinks = [...prevLinks];

            if (index >= 0 && index <= newLinks.length) {
                newLinks.splice(index, 0, entity);
            } else {
                newLinks.push(entity);
            }

            return newLinks;
        });
    };

    const load = () => {
        setIsLoading(true);
        setError(null);

        getChain()
            .then(setLinks)
            .catch(setError)
            .finally(() => setIsLoading(false));
    };

    const update = (entity: ChainLink) => {
        setLinks(list => list.map(item =>
            item.id === entity.id? entity : item
        ));
    };

    const remove = (entity: ChainLink) => {
        setLinks(list => list.filter(item => item.id !== entity.id));
    }

    return { links, isLoading, error, setLinks, insert, load, update, remove };
}