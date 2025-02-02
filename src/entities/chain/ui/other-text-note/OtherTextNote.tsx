import {OtherText} from "@/entities/chain";
import {OtherTexts} from "@/shared/types/entities";
import {Note} from "@/shared/ui/note";
import {t} from "i18next";
import styles from './OtherTextNote.module.scss';

interface OtherTextProps {
    otherTexts: OtherTexts
}

export const OtherTextNote = ({ otherTexts }: OtherTextProps) => {
    return (
        <Note title={t('chain.otherText')} className={styles.otherTextNote}>
            <OtherText label={t('chain.afterAccountCreatedText')} text={otherTexts.afterAccountCreatedText}/>
            <OtherText label={t('chain.mainMenuText')} text={otherTexts.mainMenuText}/>
            <OtherText label={t('chain.afterAccountSentText')} text={otherTexts.afterAccountSentText}/>
        </Note>
    );
};