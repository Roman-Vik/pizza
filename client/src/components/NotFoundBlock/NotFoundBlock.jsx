import React from 'react'
import s from "./NotFoundBlock.module.css"

export function NotFoundBlock () {
  return (
    <div className={s.text}>
        <h1>
            <span className={s.smile}>☹</span>
            <br />
            Ничего не найдено
        </h1>
        <p className={s.description}>К сожалению данная страница отсутствует в нашем интернет-магазине</p>
    </div>
  )
}
