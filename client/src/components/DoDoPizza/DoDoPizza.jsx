import s from "./DoDoPizza.module.css"
import logo from "../images/logo.svg";
import dodoPizza from "../images/dodoPizza.svg";
import tagline from "../images/tagline.svg";
import { Link } from "react-router-dom"

export function DoDoPizza() {
    return  (
        <Link to="/">
                <div className={s.itemsLogo}>
        <div className={s.box}>
            <img className={s.img} src={logo} alt="logo-dodo" />
        </div>
        <div className={s.boxSecond}>
            <div className={s.logoHeaderBox}>
                <img className={s.img} src={dodoPizza} alt="dodoPizza" />
            </div>
            <div className={s.logoTagline}>
                <img className={s.img} src={tagline} alt="dodo-tagline" />
            </div>
        </div>
    </div>
        </Link>
)}