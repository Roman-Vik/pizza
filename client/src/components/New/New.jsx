import s from "./New.module.css";
import logo1 from "../images/items/popular/popular-1.webp";
import logo2 from "../images/items/popular/popular-2.webp";
import logo3 from "../images/items/popular/popular-3.webp";
import logo4 from "../images/items/popular/popular-4.webp";
////!data ? "loading..." : data
export function New({data}) {

	return (
		<>
			<div className={s.container}>
				<div className={s.rangeNew}>
					<h1 className={s.headerline}>Новое и популярное</h1>
					<div className={s.box}>
						{data?.products?.novelty?.map((el, i) => <div className={s.item}>
							<div className={s.wrap}>
								<img
									className={s.img}
									src={el.img}
									alt="&#127829"
								/>
							</div>
							<div className={s.info}>
								<p className={s.title}>{el.title}</p>
								<p className={s.price}>{`от ${el.price} ₽`}</p>
							</div>
						</div>)}
					</div>
				</div>
			</div>
		</>
	);
}
