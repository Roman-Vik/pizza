import s from "./ToppingToPizza.module.css"
import {Container} from "../Container/Container";
import x from "../../components/images/Vector.svg"
import img from "../../components/images/Ingredients/image_1.png"
import {PizzaSelection} from "../PizzaSelection/PizzaSelection";



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
                        <div className={s.right_sectiont__name}>чеддер
                            <button><img src={x} alt="x"/></button>
                            ,
                        </div>
                        <div className={s.right_sectiont__name}>чеддер
                            <button><img src={x} alt="x"/></button>
                            ,
                        </div>
                    </div>

                    {/*<div className={s.right_sectiont__choiceOfIngredients}>*/}
                    {/*    <div className={s.right_section__radio}>*/}
                    {/*        <PizzaSelection/>*/}
                    {/*        <PizzaSelection/>*/}
                    {/*        <PizzaSelection/>*/}
                    {/*    </div>*/}
                    {/*    <div className={s.right_section__radio}>*/}
                    {/*        <PizzaSelection/>*/}
                    {/*        <PizzaSelection/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className={s.wrapperIngredients}>
                        <h2>Добавить в пиццу</h2>
                        <div className={"все фотки пицц"}>
                            <div>
                                <input
                                    width="84px"
                                    height="84px"
                                    className={s.radio__inputImg}
                                    src={img}
                                    type="image"
                                    name="Ingredients"
                                    value="mushrooms"
                                    id="regular"
                                    onClick={e => console.log(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}