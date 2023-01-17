import s from "./ToppingToPizza.module.css"
import {Container} from "../Container/Container";

export function ToppingToPizza() {
    return (
        <Container>
            <div className={s.topping}>
                <div className={s.left__section}>
                    <div className={s.radius}></div>
                    <div className={s.wrapper_img}>
                        <img src="http://127.0.0.1:5000/photos/items/pizzas/pizza-7-2x.webp" alt="dddd"/>
                    </div>
                </div>
                <div className={s.right_section}>
                <h2 className={s.right_section__headLine}>Чиззи чеддер</h2>
                    <p className={s.right_section__text}>{`30 см, традиционное тесто, 480 г`}</p>
                    <div className={s.right_sectiont__selected}>
                        <div className={s.right_sectiont__name}><p>чеддер</p> <button></button></div>
                        <div className={s.right_sectiont__name}><p>чеддер2</p> <button></button></div>


                    </div>
                </div>
            </div>
        </Container>
    )
}