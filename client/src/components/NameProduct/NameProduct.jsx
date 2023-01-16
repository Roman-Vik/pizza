import s from "./NameProduct.module.css";

export function NameProduct({ data, children }) {
	return (
		<>
			{data?.products?.pages.map((el, i) => (
				<h2 key={i} className={s.cards__headerline}>
					{el}
					{children}
				</h2>
			))}
		</>
	);
}
