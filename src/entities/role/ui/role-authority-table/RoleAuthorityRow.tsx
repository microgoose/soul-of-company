import {TableCell} from "@/shared/ui/table/ui/table-cell/TableCell.tsx";
import {TableRow} from "@/shared/ui/table";
import {ReactNode, useMemo} from "react";
import {RoleAuthorities} from "@/shared/types/entities";
import {SimpleList} from "@/shared/ui/list";

interface RoleRowProps {
    roleAuthorities: RoleAuthorities
    actions?: (role: RoleAuthorities) => ReactNode,
}

export const RoleAuthorityRow = ({roleAuthorities, actions}: RoleRowProps) => {
    const authorities = useMemo(() =>
        roleAuthorities.authorities.map(authority => authority.name), [roleAuthorities]);

    return (
        <TableRow>
            <TableCell>
                {roleAuthorities.role.name}
            </TableCell>
            <TableCell>
                <SimpleList list={authorities}/>
            </TableCell>
            <TableCell smallest>
                {actions && actions(roleAuthorities)}
            </TableCell>
        </TableRow>
    );
}