import {Reminder, SendingStatusCode} from "@/shared/types/entities";
import {StatusTag, TagStatus} from "@/shared/ui/status-tag";
import {formatDateTime} from "@/shared/utils/time-utils.ts";
import {t} from "i18next";
import {useMemo} from "react";

interface ReminderSendingStatusProps {
    reminder: Reminder,
}

export const ReminderSendingStatus = ({ reminder }: ReminderSendingStatusProps) => {
    const sendingStatus = reminder.sendingStatus;
    const additional = reminder.readAt? t('preposition.in') + ' ' + formatDateTime(reminder.readAt) : null;

    const status = useMemo(() => {
        switch (sendingStatus.code) {
            case SendingStatusCode.IN_QUEUE: return TagStatus.CANCELLED;
            case SendingStatusCode.READ_IT: return TagStatus.DONE;
            case SendingStatusCode.SENT: return TagStatus.IN_PROGRESS;
            case SendingStatusCode.STOPPED: return TagStatus.ERROR;
            default:
                throw new Error(t('errors.reminderSendingStatus.notAccountedFor') + ' ' + sendingStatus.name);
        }
    }, [sendingStatus]);

    return (
        <StatusTag
            status={status}
            title={sendingStatus.name}
            additional={additional || undefined}
        />
    );
}