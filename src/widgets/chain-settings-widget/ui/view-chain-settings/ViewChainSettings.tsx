import {OtherTextNote, SequenceItem, SequenceNote} from "@/entities/chain";
import {ChainLink, OtherTexts} from "@/shared/types/entities";

interface ViewChainSettingsProps {
    chainLinks: ChainLink[],
    otherTexts: OtherTexts
}

export const ViewChainSettings = ({ chainLinks, otherTexts }: ViewChainSettingsProps) => {
    return (
        <>
            <SequenceNote>
                {chainLinks.map((chainLink, i) => (
                    <SequenceItem key={i} position={chainLink.role.name} text={chainLink.text}/>
                ))}
            </SequenceNote>
            <OtherTextNote otherTexts={otherTexts} />
        </>
    )
};