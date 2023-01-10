import s from "./Contacts.module.css"

export function Contacts({children}) {
    return (
    <div className={s.reference__contacts}>
        <a className={s.reference__num} href="tel:+88003020060">8-800-302-00-60</a>
        <a className={s.reference__tel} href="tel:+88003020060">Позвоните нам!</a>
        {children}
    </div>
    )
}