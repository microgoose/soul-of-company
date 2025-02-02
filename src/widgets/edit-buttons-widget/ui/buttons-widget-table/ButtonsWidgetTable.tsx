import {ButtonEntityTable, getAllButtonEntities} from "@/entities/button-entity";
import {RotateLeftStreamLine} from "@/shared/assets";
import {TableContainer} from "@/shared/layout";
import {ButtonEntity} from "@/shared/types/entities";
import {EmptyButton} from "@/shared/ui/button";
import {useQuery} from "@tanstack/react-query";
import {t} from "i18next";
import {useCallback, useEffect, useState} from "react";
import {ButtonEntityDisplayField} from "../button-entity-display-field/ButtonEntityDisplayField.tsx";

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
        <TableContainer>
            <ButtonEntityTable
                buttons={buttons}
                displayInputCell={displayInputCell}
                updateCell={updateCell}
            />
        </TableContainer>
    );
};