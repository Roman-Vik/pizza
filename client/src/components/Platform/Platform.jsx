import s from "./Platform.module.css"
import appstore from "../images/icons/appstore.png"
import gplay from "../images/icons/gplay.png"

export function Platform() {
    return (
    <div className={s.reference__lApp}>
        <a href="/">
            <div className={s.reference__img}><img src={gplay} alt="GooglePlay"/></div>
        </a>
        <a href="/">
            <div className={s.reference__img}><img src={appstore} alt="AppStore"/></div>
        </a>
    </div>        
    )
}