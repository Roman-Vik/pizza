import s from "./New.module.css";
export function New({ data }) {
	return (
		<>
			<div className={s.container}>
				<div className={s.rangeNew}>
					<h1 className={s.headerline}>Новое и популярное</h1>
					<div className={s.box}>
						{data?.novelty?.map((el, i) => (
							<div key={i} className={s.item}>
								<div className={s.wrap}>
									<img
										className={s.img}
										src={el.img}
										alt="&#127829"
									/>
								</div>
								<div className={s.info}>
									<p className={s.title}>{el.title}</p>
									<p
										className={s.price}
									>{`от ${el.price} ₽`}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
