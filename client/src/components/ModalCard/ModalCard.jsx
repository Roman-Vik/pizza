import React from 'react'
import s from "./ModalCard.module.css"
import { Link } from 'react-router-dom'
import img from "../images/cart/image 11.webp"

export function ModalCard () {
  return (
    <>
    <section className={s.modal}>
        <div className={s.picture__modal}>
            <div className={s.img__modal}>
                <img src={img} alt="Рулетики" />
            </div>
        </div>
        <div className={s.info}>
            <h1 className={s.title__info}>Рулетики с ананасами <br /> + Рулетики с <br /> брусникой, &nbsp;16 шт</h1>
            <span className={s.number__info}>16&nbsp;шт</span>
            <span className={s.subtitle__info}>Микс рулетиков со сгущенным молоком: 8 штук с ананасом и корицей, 8 штук с брусникой</span>
            <button className={`${s.btn} ${s.btn__orange}`}><Link className={s.add__btn} to="">Добавить в корзину за 625 ₽ </Link></button>
        </div>
    </section>
    </>
  )
}
