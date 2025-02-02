import {ButtonType} from "@/shared/ui/button";
import {createButton} from "../../model/create-button.tsx";
import styles from './IconButton.module.scss';

export const IconButton = createButton(styles, {
    type: ButtonType.EMPTY,
});