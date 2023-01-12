import s from "./Ul.module.css"

export function Ul({listPages}) {
    return (
    <nav>
        <ul className={s.menu__list}>
            {/*{listPages.map((el)=> {*/}
            {/*    return <li  className={s.menu__item}><a key={el} href="src/components/Ul/Ul#" className={s.menu__link}>{el}</a></li>*/}
            {/*})}*/}
        </ul>
    </nav>
        
    )
}