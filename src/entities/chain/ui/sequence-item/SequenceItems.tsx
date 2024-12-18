import {ReactNode} from "react";
import {SequenceLinkArrow} from "../sequence-link-arrow/SequenceLinkArrow.tsx";

interface SequenceProps {
    children: ReactNode[],
}

export const SequenceItems = ({ children }: SequenceProps) => {
    return children.map((child, i) => (
        <div key={i}>
            {child}
            {i + 1 === children.length? null : <SequenceLinkArrow/>}
        </div>
    ));
};