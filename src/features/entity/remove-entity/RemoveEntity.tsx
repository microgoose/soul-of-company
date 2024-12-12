import {useCallback} from "react";
import {BasketIcon} from "@/shared/assets";
import {IconButton} from "@/shared/ui/button";

interface RemoveEntityProps<T> {
    entity: T,
    tooltip: string,
    onRemove: (entity: T) => void,
}

export const RemoveEntity = <T,> ({ entity, tooltip, onRemove }: RemoveEntityProps<T>) => {
    const handleOnClick = useCallback(() => {
        onRemove(entity);
    }, [entity, onRemove]);

    return (
        <IconButton tooltip={tooltip} onClick={handleOnClick}>
            <BasketIcon/>
        </IconButton>
    );
};