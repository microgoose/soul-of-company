import {User} from "@/shared/types/entities";
import {Toggle} from "@/shared/ui/toggle";
import {useCallback} from "react";

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