import {PlusIcon} from "@/shared/assets";
import {useToggle} from "@/shared/hooks/use-toggle.ts";
import {SecondaryButton} from "@/shared/ui/button";
import style from './AddEntity.module.scss';

interface FormProps<T> {
    isOpen: boolean,
    onSubmit: (entity?: T) => void
}

type FormCallback<T> = (props: FormProps<T>) => JSX.Element;

interface CreateEntityProps<T> {
    label: string,
    modalForm: FormCallback<T>,
    onCreate: (entity: T) => void,
}

export const AddEntity = <T,> ({ label, modalForm, onCreate }: CreateEntityProps<T>) => {
    const { isOpen, open, close } = useToggle(false);

    const handleSubmit = (entity?: T) => {
        if (entity) {
            onCreate(entity);
        }

        close();
    };

    return (
        <>
            <SecondaryButton className={style.addEntityButton} onClick={open}>
                <span>{label}</span>
                <PlusIcon/>
            </SecondaryButton>

            {modalForm({ isOpen, onSubmit: handleSubmit })}
        </>
    );
};