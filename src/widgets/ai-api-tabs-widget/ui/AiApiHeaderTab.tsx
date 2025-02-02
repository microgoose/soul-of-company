import {FilledCheckMark} from "@/shared/assets";
import {AiApi} from "@/shared/types/entities/ai-api.types.ts";
import {TabItem} from "@/shared/ui/tabs";
import styles from './AiApiHeaderTab.module.scss';

type Props = {
    activeAiApi: AiApi | undefined,
    tab: TabItem,
}

export const AiApiHeaderTab = ({activeAiApi, tab}: Props) => {
    const isActive = activeAiApi?.id === tab.id;

    if (isActive) {
        return (
            <div className={styles.aiApiTabHeader}>
                <span className={styles.aiApiTabLabel}>{tab.label}</span>
                {isActive && (
                    <i className={styles.filledCheckMark}>
                        <FilledCheckMark/>
                    </i>
                )}
            </div>
        );
    }

    return tab.label;
};