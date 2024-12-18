import styles from './StatusTag.module.scss';

interface TagStatusTooltipProps {
    additional?: string,
}

export const TagStatusAdditional = ({additional}: TagStatusTooltipProps) => {
   return additional?
       <span className={styles.additional}>{additional}</span> :
       null;
}