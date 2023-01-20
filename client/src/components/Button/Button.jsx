import {Link} from "react-router-dom"
import s from "./Button.module.css"
//
// const nameBtn = {
//    add: "Добавить в корзину за"
// }


export function Button({children}) {
    return (
        <button className={s.menu__btn}><Link className={s.menu__cart} to="/basket">{children}</Link></button>
    )
}