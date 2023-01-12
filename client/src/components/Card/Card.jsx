import s from "./Card.module.css"
import imgPizza from "../images/items/pizza/pizza-1-2x.webp"

export function Card() {
    return (
            <div className={s.cards}>
                    <div className={s.cards__item}>
                        <div className={s.cards__wrapper}>
                            <img className={s.cards__img} src={imgPizza} alt="Pizza"/>
                        </div>
                        <div className={s.cards__description}>
                            <h3 className={s.cards__title}>Пицца из половинок</h3>
                            <p className={s.cards__text}> Соберите свою пиццу 35 см с двумя разными вкусами</p>
                            <p className={s.cards__text__epmty}>от 600 ₽</p>
                        </div>
                        <div className={s.cards__option}>
                            <p className={s.cards__price}>от 600 ₽</p>
                            <button className={s.cards__choice}>Выбрать</button>
                        </div>
                    </div>
            </div>
    )
}