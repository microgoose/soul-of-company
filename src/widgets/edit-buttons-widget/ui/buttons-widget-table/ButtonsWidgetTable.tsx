import {useQuery} from "@tanstack/react-query";
import {ButtonEntityTable, getAllButtonEntities} from "@/entities/button-entity";
import {t} from "i18next";
import {ButtonEntityDisplayField} from "../button-entity-display-field/ButtonEntityDisplayField.tsx";
import {EmptyButton} from "@/shared/ui/button";
import {useCallback, useEffect, useState} from "react";
import {ButtonEntity} from "@/shared/types/entities";
import styles from './ButtonsWidgetTable.module.scss';
import {RotateLeftStreamLine} from "@/shared/assets";
import {OuterVerticalScroll} from "@/shared/ui/scrollbar";


export const ButtonsWidgetTable = () => {
    const [buttons, setButtons] = useState<ButtonEntity[]>([]);
    const { data = [], isLoading, error } = useQuery<ButtonEntity[]>({
        queryKey: ['buttons'],
        queryFn: () => getAllButtonEntities()
    });

    const displayInputCell = useCallback((button: ButtonEntity) => (
        <ButtonEntityDisplayField button={button}/>
    ), []);

    const updateCell = useCallback(() => (
        <EmptyButton>
            <RotateLeftStreamLine/>
           <span> {t('actions.refresh')}</span>
        </EmptyButton>
    ), []);

    useEffect(() => {
        if (data.length)
            setButtons(data);
    }, [data]);
    
    if (isLoading) {
        return <span>{t('loading')}</span>
    }

    if (error) {
        return <span>{error.message}</span>
    }

    return (
        <OuterVerticalScroll className={styles.buttonsWidgetTable}>
            <ButtonEntityTable
                buttons={buttons}
                displayInputCell={displayInputCell}
                updateCell={updateCell}
            />
        </OuterVerticalScroll>
    );
};