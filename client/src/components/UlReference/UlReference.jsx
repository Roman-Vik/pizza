import s from "./UlReference.module.css"

export function UlReference({children}) {
    return (
    <div className={s.reference__item}>
    <h3 className={s.reference__headline}>Додо Пицца</h3>
        <ul>
            <li><a className={s.reference__link} href="/">О нас</a></li>
            <li><a className={s.reference__link} href="/">Додо-книга</a></li>
            <li><a className={s.reference__link} href="/">Блог «Сила ума»</a></li>
            <li><a className={s.reference__link} href="/">Додо ИС</a></li>
        </ul>
    </div>
    )
}