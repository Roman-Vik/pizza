import s from "./ToppingToPizza.module.css"
import {Container} from "../Container/Container";
import x from "../../components/images/Vector.svg"

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
                        <div className={s.right_sectiont__name}>чеддер<button ><img src={x} alt="x"/></button>,</div>
                        <div className={s.right_sectiont__name}>чеддер<button><img src={x} alt="x"/></button>,</div>


                    </div>
                    <div className={s.right_sectiont__pizzaSize}>
                        <input
                            type="radio"
                            name="topping"
                            value="Regular"
                            id="regular"
                            // checked={topping === "Regular"}
                            // onChange={onOptionChange}
                        />
                        <label htmlFor="regular">Regular</label>

                        <input
                            type="radio"
                            name="topping"
                            value="Medium"
                            id="medium"
                            // checked={topping === "Medium"}
                            // onChange={onOptionChange}
                        />
                        <label htmlFor="medium">Medium</label>

                        <input
                            type="radio"
                            name="topping"
                            value="Large"
                            id="large"
                            // checked={topping === "Large"}
                            // onChange={onOptionChange}
                        />
                        <label htmlFor="large">Large</label>


                    </div>
                    <div className={s.right_sectiont__choiceOfTest}>
                        <input
                            type="radio"
                            name="topping"
                            value="Regular"
                            id="regular"
                            // checked={topping === "Regular"}
                            // onChange={onOptionChange}
                        />
                        <label htmlFor="regular">Regular</label>

                        <input
                            type="radio"
                            name="topping"
                            value="Medium"
                            id="medium"
                            // checked={topping === "Medium"}
                            // onChange={onOptionChange}
                        />
                        <label htmlFor="medium">Medium</label>

                    </div>
                </div>
            </div>
        </Container>
    )
}