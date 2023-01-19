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
                    <div className={s.right_section__choiceOfIngredients}>
                        <div className={s.right_section__radio}>
                            <PizzaSelection/>
                        </div>

                    </div>
                    <div className={s.wrapperIngredients}>
                        <h2>Добавить в пиццу</h2>
                        <div className={s.wrapper__items}>
                            <label className={s.radio__labelImg} htmlFor="card">
                                <input
                                    width="84px"
                                    height="84px"
                                    className={s.radio__inputImg}
                                    src={img}
                                    type="image"
                                    name="Ingredients"
                                    value="mushrooms"
                                    id="card"
                                    onClick={e => console.log(e.target.value)}
                                />
                                <div className={s.x}>
                                    <p className={s.name}>Сырный<br/> бортик</p>
                                </div>

                                <span className={s.price}>599 ₽</span>

                            </label>
                            <label className={s.radio__labelImg} htmlFor="card">
                                <input
                                    width="84px"
                                    height="84px"
                                    className={s.radio__inputImg}
                                    src={img}
                                    type="image"
                                    name="Ingredients"
                                    value="mushrooms"
                                    id="card"
                                    onClick={e => console.log(e.target.value)}
                                />
                                <p className={s.name}>Шампиньоны</p>
                                <span className={s.price}>39 ₽</span>

                            </label>
                            <label className={s.radio__labelImg} htmlFor="card">
                                <input
                                    width="84px"
                                    height="84px"
                                    className={s.radio__inputImg}
                                    src={img}
                                    type="image"
                                    name="Ingredients"
                                    value="mushrooms"
                                    id="card"
                                    onClick={e => console.log(e.target.value)}
                                />
                                <p className={s.name}>Цыпленок</p>
                                <span className={s.price}>59 ₽</span>

                            </label>
                            <label className={s.radio__labelImg} htmlFor="card">
                                <input
                                    width="84px"
                                    height="84px"
                                    className={s.radio__inputImg}
                                    src={img}
                                    type="image"
                                    name="Ingredients"
                                    value="mushrooms"
                                    id="card"
                                    onClick={e => console.log(e.target.value)}
                                />
                                <p className={s.name}>Моцарелла</p>
                                <span className={s.price}>100 ₽</span>

                            </label>
                            <label className={s.radio__labelImg} htmlFor="card">
                                <input
                                    width="84px"
                                    height="84px"
                                    className={s.radio__inputImg}
                                    src={img}
                                    type="image"
                                    name="Ingredients"
                                    value="mushrooms"
                                    id="card"
                                    onClick={e => console.log(e.target.value)}
                                />
                                <p className={s.name}>Халапеньо </p>
                                <span className={s.price}>119 ₽</span>

                            </label>
                            <label className={s.radio__labelImg} htmlFor="card">
                                <input
                                    width="84px"
                                    height="84px"
                                    className={s.radio__inputImg}
                                    src={img}
                                    type="image"
                                    name="Ingredients"
                                    value="mushrooms"
                                    id="card"
                                    onClick={e => console.log(e.target.value)}
                                />
                                <p className={s.name}>Копченый<br/>цыпленок</p>
                                <span className={s.price}>599 ₽</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}