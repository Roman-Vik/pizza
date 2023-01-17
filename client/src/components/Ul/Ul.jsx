
import { Link } from "react-router-dom"
import s from "./Ul.module.css"

export function Ul({data}) {

    return (
        <nav>
            <ul className={s.menu__list}>
                {
                   data?.list?.map( (el,i) => <li key={i}  className={s.menu__item}>
                        <Link key={i} to=""
                           className={s.menu__link}>{el}</Link></li> )
                }

                <li className={s.menu__item}>
                    <Link to="src/components/Ul/Ul#"
                       className={s.menu__link}>Другие товары</Link></li>
            </ul>
        </nav>
    )
}

