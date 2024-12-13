import {SortingType} from "@/shared/ui/table";

export type SortableValue = string | number | Date | null;

export const getSortedRows = <T> (
    rows: T[],
    mapper: (row: T) => SortableValue,
    sortType: SortingType,
) => {
    return rows.sort((i1, i2) => {
        let value1: SortableValue = mapper(i1);
        let value2: SortableValue = mapper(i2);

        if (!value1 && !value2)
            return 0;

        if (value1 instanceof Date || value2 instanceof Date) {
            value1 = (value1 as Date).getTime();
            value2 = (value2 as Date).getTime();
        }

        if (sortType === SortingType.ASC) {
            if (value1 === null) return -1;
            if (value2 === null) return 1;
            if (value1 < value2) return -1;
            if (value1 > value2) return 1;
        } else if (sortType === SortingType.DESC) {
            if (value1 === null) return 1;
            if (value2 === null) return -1;
            if (value1 > value2) return -1;
            if (value1 < value2) return 1;
        }

        return 0;
    });
};