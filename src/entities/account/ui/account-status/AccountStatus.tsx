import {Account, AccountStatusCode} from "@/shared/types/entities";
import {useMemo} from "react";
import {StatusTag, TagStatus} from "@/shared/ui/status-tag";
import {t} from "i18next";

interface AccountStatusProps {
    account: Account
}

export const AccountStatus = ({ account }: AccountStatusProps) => {
    const accountStatus = account.status;
    const statusComment = account.statusComment;

    const status = useMemo(() => {
        switch (accountStatus.code) {
            case AccountStatusCode.COMPLETED: return TagStatus.DONE;
            case AccountStatusCode.IN_PROGRESS: return TagStatus.IN_PROGRESS;
            case AccountStatusCode.EXPIRED: return TagStatus.EXPIRED;
            case AccountStatusCode.DENIED: return TagStatus.ERROR;
            case AccountStatusCode.CANCELLED: return TagStatus.CANCELLED;
            default:
                throw new Error(t('errors.accountStatus.notAccountedFor') + ' ' + accountStatus.name);
        }
    }, [accountStatus]);

    return (
        <StatusTag 
            status={status}
            title={accountStatus.name}
            tooltip={statusComment || undefined}
        />
    );
}