import s from "./Button.module.css"

export function Button() {
    return (
        <button className={s.menu__btn}><a className={s.menu__cart} href="src/components/Button/Button#">Корзина</a></button>
    )
}