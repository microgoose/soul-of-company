import styles from './IconButton.module.scss';
import {createButton} from "../../model/create-button.tsx";
import {ButtonType} from "@/shared/ui/button";

export const IconButton = createButton(styles, {
    type: ButtonType.EMPTY,
});