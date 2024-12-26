import {IconButton} from "@/shared/ui/button";
import {PencilIcon} from "@/shared/assets";
import {useToggle} from "@/shared/hooks/use-toggle.ts";
import {ReactNode, useCallback} from "react";
import styles from './UpdateEntity.module.scss';

type FormCallback<T> = (isOpen: boolean, onSubmit: (entity?: T) => void, entity: T) => ReactNode;

interface EditEntityProps<T> {
    entity: T,
    tooltip: string,
    children: FormCallback<T>,
    onUpdate: (entity: T) => void,
}

export const UpdateEntity = <T,> ({ entity, tooltip, children, onUpdate }: EditEntityProps<T>) => {
    const { isOpen, open, close } = useToggle(false);

    const updateUser = useCallback((entity?: T) => {
        if (entity) {
            onUpdate(entity);
        }

        close();
    }, [close, onUpdate]);

    return (
        <>
            <IconButton tooltip={tooltip} onClick={open} className={styles.updateEntityButton}>
                <PencilIcon/>
            </IconButton>

            {children(isOpen, updateUser, entity)}
        </>
    );
};