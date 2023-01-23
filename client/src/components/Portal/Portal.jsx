import {createPortal} from "react-dom";

export function Portal({children, element = document.body }) {
    return(
        createPortal(children, element)
    )
}