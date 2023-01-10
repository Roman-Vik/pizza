import s from "./Container.module.css";
export function Container({ children }) {
	return (
		<>
			<div className={s.container}>{children}</div>
		</>
	);
}
