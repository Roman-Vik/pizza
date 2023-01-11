import s from "./Container2.module.css";
export function Container2({ children }) {
	return (
			<div className={s.container}>{children}</div>
	);
}
