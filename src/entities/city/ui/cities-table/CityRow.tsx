import {TableCell} from "@/shared/ui/table/ui/table-cell/TableCell.tsx";
import {TableRow} from "@/shared/ui/table";
import {ReactNode} from "react";
import styles from './CitiesTable.module.scss';
import {City} from "@/shared/types/entities";

interface UserRowProps {
    city: City,
    actionsCell?: (city: City) => ReactNode,
}

export const CityRow = ({city, actionsCell}: UserRowProps) => {
    return (
        <TableRow className={styles.cityRow}>
            <TableCell className={styles.numberColumn}>
                <span>{city.id}</span>
            </TableCell>
            <TableCell>
                <span>{city.name}</span>
            </TableCell>
            <TableCell smallest>
                <div>
                    {actionsCell && actionsCell(city)}
                </div>
            </TableCell>
        </TableRow>
    );
}