import s from "./Section.module.css";
import  Card  from "../Card/Card";

export function Section({ el, setAct,  setLinkPizza, setPricePizza }) {
	return (
		<section className={s.section}>
			<h2 className={s.cards__headerline}>{el.name}</h2>
			<div className={s.cards__items}>
				{" "}
				{el?.arr?.map((el, i) => (
					<Card setPricePizza={setPricePizza}  setLinkPizza={setLinkPizza} setAct={setAct} setAct={setAct} key={i} el={el} />
				))}
			</div>
		</section>
	);
}
