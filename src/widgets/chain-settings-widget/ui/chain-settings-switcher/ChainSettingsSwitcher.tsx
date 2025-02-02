import {UseChainSettingsController} from "@/widgets/chain-settings-widget";
import {EditChainSettings} from "../edit-chain-settings/EditChainSettings.tsx";
import {ViewChainSettings} from "../view-chain-settings/ViewChainSettings.tsx";

interface ChainSettingsSwitcherProps {
    chainController: UseChainSettingsController
}

export const ChainSettingsSwitcher = ({ chainController }: ChainSettingsSwitcherProps) => {
    if (chainController.isEditMode) {
        return <EditChainSettings controller={chainController}/>
    }

    return <ViewChainSettings
        chainLinks={chainController.chainController.links}
        otherTexts={chainController.otherTextsController.otherTexts}
    />
};