import s from "./Ul.module.css"

export function Ul() {
    return (
    <nav>
        <ul className={s.menu__list}>
            <li className={s.menu__item}><a href="src/components/Ul/Ul#" className={s.menu__link}>Пицца</a></li>
            <li className={s.menu__item}><a href="src/components/Ul/Ul#" className={s.menu__link}>Комбо</a></li>
            <li className={s.menu__item}><a href="src/components/Ul/Ul#" className={s.menu__link}>Закуски</a></li>
            <li className={s.menu__item}><a href="src/components/Ul/Ul#" className={s.menu__link}>Дессерты</a></li>
            <li className={s.menu__item}><a href="src/components/Ul/Ul#" className={s.menu__link}>Другие товаты</a></li>
        </ul>
    </nav>
        
    )
}