import s from './Sliders.module.css'
import slide_central from "../../components/images/slider/slide-central.webp";
import { Container } from "../../components/Container/Container"

export function Sliders (){
    return (
        <section className={s.sliders}>
            <Container>
                <div>
                   <img src={slide_central} className={s.sliders__main} alt="slide-central.webp"/>
                </div>
            </Container>
        </section>
    )
}