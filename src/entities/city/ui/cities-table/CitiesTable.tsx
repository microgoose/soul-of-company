import {City} from "@/shared/types/entities";
import {Table, TableBody, TableHeaders, useTable, useTableSorting} from "@/shared/ui/table";
import {ReactNode} from "react";
import {CitiesHeader} from './CitiesHeader.tsx';
import {CityRow} from "./CityRow.tsx";
import {citiesHeaders} from "./model/cities-table-headers.ts";

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