import {SortingType, TableHeaderType} from "@/shared/ui/table";
import {t} from "i18next";
import {DefaultSort} from "./sorter.types.ts";

export class SortState {
    private column: TableHeaderType | undefined;
    private sortType: SortingType;

    constructor(props: DefaultSort | undefined) {
        if (props) {
            this.column = props.column;
            this.sortType = props.sortType;
        } else {
            this.column = undefined;
            this.sortType = SortingType.ASC;
        }
    }

    setSorting(columnKey: TableHeaderType, newSortType: SortingType) {
        this.column = columnKey;
        this.sortType = newSortType;
    }

    nextSorting() {
        const column = this.column;

        if (!column)
            return;

        switch (this.sortType) {
            case SortingType.NONE:
                this.setSorting(column, SortingType.ASC);
                break;
            case SortingType.ASC:
                this.setSorting(column, SortingType.DESC);
                break;
            case SortingType.DESC:
                this.setSorting(column, SortingType.NONE);
                break;
            default:
                throw new Error(t('errors.unreachableSortType') + ' ' + this.sortType);
        }
    }

    getColumn() {
        return this.column;
    }

    getSortType() {
        return this.sortType;
    }
}