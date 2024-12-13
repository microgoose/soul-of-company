import {Account, AccountStatusCode} from "@/shared/types/entities";
import styles from './AccountStatus.module.scss';
import {useMemo} from "react";
import classNames from "classnames";
import {AccountStatusWithTooltip} from "@/entities/account/ui/account-status/AccountStatusWithTooltip.tsx";

interface AccountStatusProps {
    account: Account
}

export const AccountStatus = ({ account }: AccountStatusProps) => {
    const accountStatus = account.status;
    const statusComment = account.statusComment;

    const classState = useMemo(() => classNames(
        styles.accountStatusCode,
        styles[accountStatus.code],
    ), [accountStatus.code]);

    if (accountStatus.code === AccountStatusCode.IN_PROGRESS) {
        return <AccountStatusWithTooltip
            className={classState}
            accountStatus={accountStatus}
            statusComment={statusComment}
        />;
    }

    return (
        <span className={classState}>
            {accountStatus.name}
        </span>
    );
}