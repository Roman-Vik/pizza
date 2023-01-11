import s from "./NumPhone.module.css"

export function NumPhone (){
    return(
        <div className={"statistic__wrapper"}>
            <h2 className={s.statistic__headline}>1 396 362 874 ₽</h2>
            <p className={s.statistic__text}>Выручка российской сети в этом месяце. В прошлом — 2 460 305 416 ₽</p>
        </div>
    )
}