import {ButtonEntity} from "@/shared/types/entities";
import {TextArea} from "@/shared/ui/textarea";
import {useEffect, useMemo, useState} from "react";
import {t} from "i18next";
import styles from './ButtonEntityDisplayField.module.scss';

type Props = {
    button: ButtonEntity,
};

export const ButtonEntityDisplayField = ({button}: Props) => {
    const [value, setValue] = useState<string>(button.display);
    const error = useMemo(() => {
        if (value.length > 400)
            return t('errors.characterLimitHasBeenExceeded')
        return undefined;
    }, [value]);

    useEffect(() => {
        setValue(button.display);
    }, [button.display]);
    
    return (
        <TextArea
            className={styles.buttonEntityDisplayField}
            value={value}
            error={error}
            onChange={setValue}
        />
    );
};