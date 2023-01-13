import { Link } from "react-router-dom"
import s from "./Button.module.css"

export function Button() {
    return (
        <button className={s.menu__btn}><Link className={s.menu__cart} to="/basket">Корзина</Link></button>
    )
}