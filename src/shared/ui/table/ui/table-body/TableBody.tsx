import {ReactNode} from "react";

interface TableRowsProps {
    children: ReactNode
}

export const TableBody = ({children}: TableRowsProps) => {
    return (
        <tbody>
            {children}
        </tbody>
    );
};