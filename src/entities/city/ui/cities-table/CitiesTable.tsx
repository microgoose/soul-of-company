import {ReactNode} from "react";
import {Table, TableBody, TableHeaders, useTable, useTableSorting} from "@/shared/ui/table";
import {citiesHeaders} from "./model/cities-table-headers.ts";
import {CitiesHeader} from './CitiesHeader.tsx';
import {CityRow} from "./CityRow.tsx";
import {City} from "@/shared/types/entities";

interface ButtonEntityTableProps {
    cities: City[],
    actionsCell?: (city: City) => ReactNode,
}

export const CitiesTable = ({ cities, actionsCell }: ButtonEntityTableProps) => {
    const tableController = useTable({
        headers: citiesHeaders,
        rows: cities
    });
    const sortingController = useTableSorting<City>({
        controller: tableController,
        sourceRows: cities
    });

    return (
        <Table controller={tableController}>
            <TableHeaders>
                {(header, index) =>
                    <CitiesHeader
                        key={index}
                        header={header}
                        controller={sortingController}
                    />
                }
            </TableHeaders>
            <TableBody>
                {(user, index) =>
                    <CityRow
                        key={index}
                        city={user as City}
                        actionsCell={actionsCell}
                    />
                }
            </TableBody>
        </Table>
    );
}