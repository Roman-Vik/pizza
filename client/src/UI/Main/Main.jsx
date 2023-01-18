import s from "./Main.module.css";
import { Ul } from "../../components/Ul/Ul";
import { Button } from "../../components/Button/Button";
import { Reference } from "../../components/Reference/Reference";
import { Container } from "../../components/Container/Container";
import { Statistic } from "../../components/Statistic/Statistic";
import { New } from "../../components/New/New";
import { Sliders } from "../../components/Sliders/Sliders";
import { Section } from "../../components/Section/Section";

export function Main({ data }) {
	console.log(data);

	return (
		<main>
			<section>
				<Container>
					<div className={s.menu}>
						<Ul data={data}></Ul>
						<Button></Button>
					</div>
				</Container>
			</section>
			<section className={s.range}>
				<Sliders />
				<Container>
					<New data={data} />
					{data?.products?.map((el, i) => (
						<Section el={el} />
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

//{
/* <Section title="Пицца">
						<div className={s.cards__items}>
							{data?.pizzas?.new.map((el, i) => (
								<Card key={i} {...el} />
							))}
							{data?.pizzas?.other.map((el, i) => (
								<Card key={i} {...el} />
							))}
						</div>
					</Section>
					<Section title="Комбо">
						<div className={s.cards__items}>
							{data?.combo?.map((el, i) => (
								<Card key={i} {...el} />
							))}
						</div>
					</Section>
					<Section title="Десерты">
						<div className={s.cards__items}>
							{data?.desserts?.map((el, i) => (
								<Card key={i} {...el} />
							))}
						</div>
					</Section> */
//}
