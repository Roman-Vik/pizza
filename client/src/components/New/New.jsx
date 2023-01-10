import s from "./New.module.css";
import logo1 from "../images/items/popular/popular-1.webp";
import logo2 from "../images/items/popular/popular-2.webp";
import logo3 from "../images/items/popular/popular-3.webp";
import logo4 from "../images/items/popular/popular-4.webp";

export function New() {
	return (
		<>
			<div className={s.container}>
				<div className={s.rangeNew}>
					<h1 className={s.headerline}>Новое и популярное</h1>
					<div className={s.box}>
						<div className={s.item}>
							<div className={s.wrap}>
								<img
									className={s.img}
									src={logo1}
									alt="&#127829"
								/>
							</div>
							<div className={s.info}>
								<p className={s.title}>Цезарь</p>
								<p className={s.price}>от 445 ₽</p>
							</div>
						</div>
						<div className={s.item}>
							<div className={s.wrap}>
								<img
									className={s.img}
									src={logo2}
									alt="&#127829"
								/>
							</div>
							<div className={s.info}>
								<p className={s.title}>Нежный лосось</p>
								<p className={s.price}>от 495 ₽</p>
							</div>
						</div>
						<div className={s.item}>
							<div className={s.wrap}>
								<img
									className={s.img}
									src={logo3}
									alt="&#127829"
								/>
							</div>
							<div className={s.info}>
								<p className={s.title}>2 пиццы</p>
								<p className={s.price}> 899 ₽</p>
							</div>
						</div>
						<div className={s.item}>
							<div className={s.wrap}>
								<img
									className={s.img}
									src={logo4}
									alt="&#127829"
								/>
							</div>
							<div className={s.info}>
								<p className={s.title}>Карбонара</p>
								<p className={s.price}>от 395 ₽</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
