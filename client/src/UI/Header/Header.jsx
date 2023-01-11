import s from "./Header.module.css";
import {Container} from "../../components/Container/Container"
import {DoDoPizza} from "../../components/DoDoPizza/DoDoPizza";

export function Header() {
    return (
        <>
            <Container>
                <div className={s.header}>
                    <DoDoPizza/>
                    <div className={s.itemsCnt}>
                        <p className={s.tel}>8 800 302-00-60</p>
                        <p className={s.text}>Звонок бесплатный</p>
                    </div>
                </div>
            </Container>
        </>
    );
}
