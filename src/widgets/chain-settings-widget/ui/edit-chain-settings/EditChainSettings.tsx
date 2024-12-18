import {ChainNoteForm} from "@/features/update-chain-form";
import {OtherTextNoteForm} from "@/features/update-other-text-form";
import {UseChainSettingsController} from "@/widgets/chain-settings-widget";

interface EditChainSettingsProps {
    controller: UseChainSettingsController
}

export const EditChainSettings = ({ controller }: EditChainSettingsProps) => {
    return (
        <>
            <ChainNoteForm form={controller.chainForm} />
            <OtherTextNoteForm form={controller.otherTextForm}/>
        </>
    );
};