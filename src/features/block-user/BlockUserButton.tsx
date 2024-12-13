import {Toggle} from "@/shared/ui/toggle";
import {useCallback} from "react";
import {User} from "@/shared/types/entities";

interface BlockUserProps {
    user: User,
    onBlock: (user: User) => void
}

export const BlockUserButton = ({ user, onBlock }: BlockUserProps) => {
    const handleOnChange = useCallback((checked: boolean) => {
        onBlock({ ...user, blocked: !checked });
    }, [user, onBlock]);

    return (
        <Toggle checked={!user.blocked} onChange={handleOnChange}/>
    );
};