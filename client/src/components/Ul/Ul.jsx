import s from "./Ul.module.css"


export function Ul({listPages}) {
    return (
    <nav>
        <ul className={s.menu__list}>
            {!listPages ? <li>"loading..."</li> : listPages.map((el) => {
                return <li className={s.menu__item}><a key={el} href="src/components/Ul/Ul#"
                        className={s.menu__link}>{el}</a></li>
                        })}    
        <li className={s.menu__item}><a  href="src/components/Ul/Ul#"
            className={s.menu__link}>Другие товары</a></li></ul>
    </nav>    
    )
}