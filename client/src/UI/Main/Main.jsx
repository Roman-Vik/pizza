import s from "./Main.module.css";
import { Ul } from "../../components/Ul/Ul";
import { Button } from "../../components/Button/Button";
import { Reference } from "../../components/Reference/Reference";
import { Container } from "../../components/Container/Container";
import { Statistic } from "../../components/Statistic/Statistic";
import { New } from "../../components/New/New";
import { Sliders } from "../../components/Sliders/Sliders";
import { Section } from "../../components/Section/Section";

export function Main({ data, setAct, setLinkPizza,setPricePizza }) {

	return (
		<main>
			<section className={s.navbar}>
				<Container>
					<div className={s.menu}>
						<Ul data={data}></Ul>
						<Button>Корзина</Button>
					</div>
				</Container>
			</section>
			<section className={s.range}>
				<Sliders />
				<Container>
					<New data={data} />
					{data?.products?.map((el, i) => (
						<Section setPricePizza={setPricePizza} setLinkPizza={setLinkPizza} setAct={setAct} key={i} el={el} />
					))}
				</Container>
			</section>
			<section className={s.reference}>
				<Reference></Reference>
			</section>
			<section className={s.statistic}>
				<Statistic></Statistic>
			</section>
		</main>
	);
}
