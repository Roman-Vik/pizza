import { Link } from "react-router-dom";
import s from "./Ul.module.css";

export function Ul({ data }) {
	return (
		<nav>
			<ul className={s.menu__list}>
				{data?.list?.map((el, i) => (
					<li className={s.menu__item}>
						<Link to={el.path} className={s.menu__link}>
							{el.text}
						</Link>
					</li>
				))}
				<li className={s.menu__item}>
					<Link to="/other" className={s.menu__link}>
						Другие товары
					</Link>
				</li>
			</ul>
		</nav>
	);
}
