import s from "./Mail.module.css"

export function Mail() {
    return (
        <a className={s.reference__mail} href="mailto: feedback@dodopizza.com ">feedback@dodopizza.com </a>
    )
}