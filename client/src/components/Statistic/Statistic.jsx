import s from "./Statistic.module.css"
import { Container } from "../Container/Container"

export function Statistic() {
    return (
        <Container>
            <div className={s.statistic__container}>
            <div className={s.statistic__wrapper}>
                <h2 className={s.statistic__headline}>1 396 362 874 ₽</h2>
                <p className={s.statistic__text}>Выручка российской сети в этом месяце. В прошлом — 2 460 305 416 ₽</p>
            </div>
            <div className={s.statistic__wrapper}>
                <h2 className={s.statistic__headline}>688 пиццерий</h2>
                <p className={s.statistic__text}>в 14 странах, включая Китай, США и Великобританию</p>
            </div>
            </div>
        </Container>
    )
}