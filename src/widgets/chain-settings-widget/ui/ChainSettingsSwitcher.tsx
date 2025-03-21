import {UseChainSettingsController} from "@/widgets/chain-settings-widget";
import styles from './ChainSettingsSwitcher.module.scss';
import {EditChainSettings} from "./EditChainSettings.tsx";
import {ViewChainSettings} from "./ViewChainSettings.tsx";

interface ChainSettingsSwitcherProps {
    chainController: UseChainSettingsController
}

export const ChainSettingsSwitcher = ({ chainController }: ChainSettingsSwitcherProps) => {
    let modeComponent = (
        <ViewChainSettings
            chainLinks={chainController.chainController.links}
            otherTexts={chainController.otherTextsController.otherTexts}
        />
    );

    if (chainController.isEditMode) {
        modeComponent = <EditChainSettings controller={chainController}/>;
    }

    return (
        <div className={styles.chainSettingsSwitcher}>
            {modeComponent}
        </div>
    )
};