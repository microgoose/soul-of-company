import {ButtonEntity} from "@/shared/types/entities";
import {TableRow} from "@/shared/ui/table";
import {TableCell} from "@/shared/ui/table/ui/table-cell/TableCell.tsx";
import {ReactNode} from "react";
import styles from './ButtonEntityTable.module.scss';

interface UserRowProps {
    button: ButtonEntity,
    updateCell: (button: ButtonEntity) => ReactNode,
    displayInputCell: (button: ButtonEntity) => ReactNode,
}

export const ButtonEntityRow = ({button, updateCell, displayInputCell}: UserRowProps) => {
    return (
        <TableRow>
            <TableCell className={styles.numberColumn}>
                {button.number}
            </TableCell>
            <TableCell className={styles.keyColumn}>
                {button.key}
            </TableCell>
            <TableCell>
                {displayInputCell(button)}
            </TableCell>
            <TableCell smallest className={styles.updateColumn}>
                {updateCell(button)}
            </TableCell>
        </TableRow>
    );
}