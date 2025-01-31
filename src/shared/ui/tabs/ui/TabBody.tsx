import {ReactNode} from "react";

type Props = {
    children: ReactNode
}

export const TabBody = ({ children }: Props) => {
    return (
        <div>
            {children}
        </div>
    );
};