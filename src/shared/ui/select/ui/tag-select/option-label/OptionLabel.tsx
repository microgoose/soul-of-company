import {OptionType} from "@/shared/ui/select";
import styles from './OptionLabel.module.scss';

interface OptionLabelProps {
    option: OptionType<unknown>,
}

export const OptionLabel = ({ option }: OptionLabelProps) => {
    // if (option.highlighted) {
    //     const parts: string[] = option.label.split(new RegExp(`(${option.highlighted})`, 'gi'));
    //
    //     return (
    //         <span className={styles.optionLabel}>
    //             {parts.map((part, index) =>
    //                 part === option.highlighted ?
    //                 <span key={index} className={styles.highlighted}>{part}</span> :
    //                 <span key={index}>{part}</span>
    //             )}
    //         </span>
    //     );
    // }

    return (
        <span className={styles.optionLabel}>{option.label}</span>
    );
}