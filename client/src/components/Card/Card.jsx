import s from "./Card.module.css";

// import imgPizza from "../images/items/pizza/pizza-1-2x.webp";

export function Card({el}) {
    const {title, img, description, price} = el
    return (

        <div className={s.cards}>
                <div className={s.cards__wrapper}>
                    <img className={s.cards__img} src={img} alt="Pizza"/>
                </div>
                <div className={s.cards__description}>
                	<h3 className={s.cards__title}>{title}</h3>
                	<p className={s.cards__text}>{description}</p>
                	<p className={s.cards__text__epmty}>{price}</p>
                </div>
                <div className={s.cards__option}>
                	<p className={s.cards__price}>{`от ${price} ₽`}</p>
                	<button className={s.cards__choice}>Выбрать</button>
                </div>
            </div>
    );
}
