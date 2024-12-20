import {Controller, useFormContext} from "react-hook-form";
import {ConferenceTime} from "@/shared/types/entities";
import {Input} from "@/shared/ui/input";
import styles from './ConferenceTimeFields.module.scss';
import {t} from "i18next";

export const ConferenceTimeFields = () => {
    const { control } = useFormContext<ConferenceTime>();

    return (
        <>
            <Controller name={`conferenceID`} control={control} render={({field}) =>
                <Input
                    className={styles.conferenceIDField}
                    label={t('conferenceTime.label.conferenceID')}
                    placeholder={t('conferenceTime.actions.enterConferenceID')}
                    {...field}
                />
            }/>

            <Controller name={`sendingTime`} control={control} render={({field}) =>
                <Input
                    type='time'
                    className={styles.sendingTimeField}
                    label={t('conferenceTime.label.sendingTime')}
                    placeholder={t('conferenceTime.actions.enterSendingTime')}
                    {...field}
                />
            }/>
        </>
    );
};