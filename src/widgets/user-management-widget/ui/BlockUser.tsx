import {Toggle} from "@/shared/ui/toggle";
import {useCallback} from "react";

interface BlockUserProps {
    blocked: null | boolean,
    onChange: (blocked: boolean) => void,
}

export const BlockUser = ({ blocked, onChange }: BlockUserProps) => {
    const handleOnChange = useCallback((checked: boolean) => {
        onChange(!checked);
    }, [onChange]);

    return (
        <Toggle checked={!blocked} onChange={handleOnChange}/>
    );
};