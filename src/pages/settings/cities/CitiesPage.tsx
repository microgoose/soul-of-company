import {t} from "i18next";
import {useDocumentTitle} from "@/shared/hooks/use-document-title.ts";
import {ActionsCell, HeaderPage, TableContainer} from "@/layout";
import {CitiesTable, useCitiesController} from "@/entities/city";
import {useCallback} from "react";
import {City} from "@/shared/types/entities";
import {RemoveEntity} from "@/features/remove-entity";
import styles from './CitiesPage.module.scss';
import {DividerTitle} from "@/shared/ui/divider-title";
import {CreateEntity} from "@/features/create-entity";
import {CreateCityModalForm} from "@/features/create-city-form";

export const CitiesPage = () => {
    useDocumentTitle(t('pages.cities.title'));
    const citiesController = useCitiesController();

    const cityActions = useCallback((city: City) => (
        <ActionsCell>
            <RemoveEntity tooltip={t('actions.delete')} entity={city} onRemove={citiesController.remove}/>
        </ActionsCell>
    ), [citiesController]);

    return (
        <HeaderPage className={styles.citiesPage}>
            <DividerTitle title={t('pages.cities.title')}>
                <CreateEntity
                    label={t('city.actions.addCity')}
                    modalForm={CreateCityModalForm}
                    onCreate={citiesController.add}
                />
            </DividerTitle>
            <TableContainer>
                <CitiesTable cities={citiesController.cities} actionsCell={cityActions}/>
            </TableContainer>
        </HeaderPage>
    );
};