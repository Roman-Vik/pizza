import s from "./Card.module.css";
import React, {useMemo} from "react";

 function Card({ el, setAct, setLinkPizza }) {
	const { title, img, imgX2, description, price } = el;

	 return (
		<>
			<div className={s.cards}>
				{" "}
				<div className={s.cards__wrapper}>
					{" "}
					<img className={s.cards__img} src={img} srcset={`${imgX2} 2x`} alt="Pizza" />{" "}

				</div>{" "}
				<div className={s.cards__description}>
					{" "}
					<h3 className={s.cards__title}>{title}</h3>{" "}
					<p className={s.cards__text}>{description}</p>{" "}
					<p className={s.cards__text__epmty}>{price}</p>{" "}
				</div>{" "}
				<div className={s.cards__option}>
					{" "}
					<p className={s.cards__price}>{`от ${price} ₽`}</p>{" "}
					<button onClick={() => {
						setAct(true)
						setLinkPizza(imgX2)
					}
					} className={s.cards__choice}>Выбрать</button>{" "}
				</div>{" "}
			</div>
		</>
	);
}
export default React.memo(Card)