import s from "./Card3.module.css"
import { Container } from "../Container/Container"


export function Card3() {
    return (
    <Container>
        <div className={s.order}>
          <div className={s.status}>
                <h1 className={s.status__value}>Приняли</h1>
                <p className={s.status__time}>24 мин</p>
          </div>
          <div className={s.address}>
            <span className={s.address__add}>Доставим по адресу:&nbsp;</span>
            <span className={s.address__sity}>Москва, ул. 1-я&nbsp;</span>
            <span className={s.address__street}>Машиностроения, д. 10</span>
         </div>
          <div className={s.button}>
            <button className={s.btn__left} href="/">Отменить заказ</button>
            <a className={s.btn__right} href="/">Вернуться в меню</a>
          </div>
        </div>
    </Container>
    )
}