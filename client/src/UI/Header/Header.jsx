import s from "./Header.module.css";
import logo from '../../components/images/logo.svg'
import dodoPizza from '../../components/images/dodoPizza.svg'
import tagline from '../../components/images/tagline.svg'
import { Container } from "../../components/Container/Container"

export function Header() {
	return (
		<>
			<Container>
			<div className={s.header}>
				<div className={s.itemsLogo}>
					<div className={s.box}>
						<img className={s.img} src={logo} alt="logo-dodo" />
					</div>
					<div className={s.boxSecond}>
						<div className={s.logoHeaderBox}>
							<img className={s.img} src={dodoPizza} alt="dodoPizza" />
						</div>
						<div className={s.logoTagline}>
							<img className={s.img} src={tagline} alt="dodo-tagline" />
						</div>
					</div>
				</div>
				<div className={s.itemsCnt}>
					<p className={s.tel}>8 800 302-00-60</p>
					<p className={s.text}>Звонок бесплатный</p>
				</div>
			</div>
			</Container>
		</>
	);
}
