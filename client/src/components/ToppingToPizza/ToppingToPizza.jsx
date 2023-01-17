import s from "./ToppingToPizza.module.css"
import {Container} from "../Container/Container";

export function ToppingToPizza() {
    return (
        <Container>
            <div className={s.topping}>
                <div className={s.left_section}>
                    <div className={s.radius}></div>
                    <div className={s.wrapper_img}>
                        <img src="http://127.0.0.1:5000/photos/items/pizzas/pizza-7-2x.webp" alt="dddd"/>
                    </div>
                </div>
                <div className={s.right_section}>
                <h2 className={s.right_section__headLine}>Чиззи чеддер</h2>
                </div>
            </div>
        </Container>
    )
}