import letterLogoGray from '../../components/images/letter-logo-gray.svg'
import fb from "../../components/images/icons/fb.png"
import fb_2 from "../../components/images/icons/fb-2x.png"
import inst from "../../components/images/icons/inst.png"
import ins_2 from "../../components/images/icons/inst-2x.png"
import ok from "../../components/images/icons/ok.png"
import ok_2 from "../../components/images/icons/ok-2x.png"
import vk from "../../components/images/icons/vk.png"
import vk_2 from "../../components/images/icons/vk-2x.png"
import yt from "../../components/images/icons/youtube.png"
import yt_2 from "../../components/images/icons/youtube-2x.png"
import s from "./Footer.module.css"
import {Container} from '../../components/Container/Container'
import {SN} from "../../components/SN(Social Networking)/SN";

export function Footer() {
    return (
        <footer style={{background: "rgb(70, 76, 85)"}}>
            <Container>
                <div className={s.ftr}>
                    <div className={s.ftr__copyright}>
                        <img className="ftr__img" src={letterLogoGray} alt="letterLogoGray"/>
                        <small className={s.ftr__cop}>&copy; 2011</small>
                    </div>
                    <div className={s.ftr__links}>
                        <a href="/" className={s.ftr__item}>Правовая информация</a>
                        <a href="/" className={s.ftr__item}>Калорийность и состав</a>
                        <a href="/" className={s.ftr__item}>Помощь</a>
                    </div>
                    <div className={s.ftr__socialNet}>
                        <SN/>
                        <SN/>
                        <SN/>
                        <SN/>
                        <SN/>
                    </div>
                </div>
            </Container>
        </footer>
    )
}