import style from './SimpleList.module.scss';

interface SimpleListProps {
    list: string[]
}

export const SimpleList = ({list}: SimpleListProps) => {
    return (
        <ul className={style.simpleList}>
            {list.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    );
};