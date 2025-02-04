import {OtherTextNote, SequenceItem, SequenceItems, SequenceNote} from "@/entities/chain";
import {ChainLink, OtherTexts} from "@/shared/types/entities";

interface ViewChainSettingsProps {
    chainLinks: ChainLink[],
    otherTexts: OtherTexts
}

export const ViewChainSettings = ({ chainLinks, otherTexts }: ViewChainSettingsProps) => {
    return (
        <>
            <SequenceNote>
                <SequenceItems>
                    {chainLinks.map((chainLink, i) => (
                        <SequenceItem key={i} position={chainLink.role.name} text={chainLink.text}/>
                    ))}
                </SequenceItems>
            </SequenceNote>
            <OtherTextNote otherTexts={otherTexts} />
        </>
    )
};