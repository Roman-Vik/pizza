import { Link } from "react-router-dom"
import s from "./Ul.module.css"

export function Ul({data}) {

    return (
        <nav>
            <ul className={s.menu__list}>
                {
                   data?.list?.map( (el,i)=> <li className={s.menu__item}>
                        <Link href=""
                           className={s.menu__link}>{el}</Link></li> )
                }
                <li className={s.menu__item}>
                    <a href="src/components/Ul/Ul#"
                       className={s.menu__link}>Другие товары</a></li>
            </ul>
        </nav>
    )
}