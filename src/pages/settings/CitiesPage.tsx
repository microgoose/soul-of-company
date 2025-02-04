import {CitiesTable, useCitiesController} from "@/entities/city";
import {AddCityModalForm} from "@/features/add-city-form";
import {AddEntity} from "@/features/add-entity";
import {RemoveEntity} from "@/features/remove-entity";
import {useDocumentTitle} from "@/shared/hooks/use-document-title.ts";
import {ActionsCell, Page, PageHeader, PageTitle, TableContainer} from "@/shared/layout";
import {City} from "@/shared/types/entities";
import {t} from "i18next";
import {useCallback} from "react";

export const CitiesPage = () => {
    useDocumentTitle(t('pages.cities.title'));
    const citiesController = useCitiesController();

    const cityActions = useCallback((city: City) => (
        <ActionsCell>
            <RemoveEntity tooltip={t('actions.delete')} entity={city} onRemove={citiesController.remove}/>
        </ActionsCell>
    ), [citiesController]);

    return (
        <Page>
            <PageHeader>
                <PageTitle>{t('pages.cities.title')}</PageTitle>
                <AddEntity
                    label={t('city.actions.addCity')}
                    modalForm={AddCityModalForm}
                    onCreate={citiesController.add}
                />
            </PageHeader>
            <TableContainer>
                <CitiesTable cities={citiesController.cities} actionsCell={cityActions}/>
            </TableContainer>
        </Page>
    );
};