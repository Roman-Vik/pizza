import s from "../ModalPizza/ModalPizza.module.css";
import img from "../images/pizza_1.png";
import {Button} from "../Button/Button";


export function Ingredients() {
    return (
        <ul className={s.ingredients__items}>
            <li className={s.ingredients__item}>
                <input className={s.ingredients__input} type="checkbox" id="id1"/>
                <label className={s.ingredients__label}
                       htmlFor="id1">
                    <img className={s.foodImg}
                         src="http://127.0.0.1:5000/photos/ingridients/image_1.png"/>
                    <p className={s.name}>Сырный<br/> бортик</p>
                    <span className={s.price}>59 ₽</span>
                </label>
            </li>

            <li className={s.ingredients__item} ><input className={s.ingredients__input}
                                                        type="checkbox" id="id2"/>
                <label className={s.ingredients__label}
                       htmlFor="id2">
                    <img src="http://127.0.0.1:5000/photos/ingridients/image_2.png"/>
                    <p className={s.name}>Шампиньоны</p>
                    <span className={s.price}>39 ₽</span>
                </label>
            </li>

            <li className={s.ingredients__item} ><input className={s.ingredients__input}
                                                        type="checkbox" id="id3"/>
                <label className={s.ingredients__label}
                       htmlFor="id3">
                    <img className={s.foodImg}
                         src="http://127.0.0.1:5000/photos/ingridients/image_3.png"/>
                    <p className={s.name}>Цыпленок</p>
                    <span className={s.price}>59 ₽</span>
                </label>
            </li>

            <li className={s.ingredients__item} ><input className={s.ingredients__input}
                                                        type="checkbox" id="id4"/>
                <label className={s.ingredients__label}
                       htmlFor="id4">
                    <img src="http://127.0.0.1:5000/photos/ingridients/image_4.png"/>
                    <p className={s.name}>Брынза</p>
                    <span className={s.price}>59 ₽</span>
                </label>
            </li>

            <li className={s.ingredients__item} ><input className={s.ingredients__input}
                                                        type="checkbox" id="id5"/>
                <label className={s.ingredients__label}
                       htmlFor="id5">
                    <img src="http://127.0.0.1:5000/photos/ingridients/image_5.png"/>

                    <p className={s.name}>Халапеньо</p>
                    <span className={s.price}>49 ₽</span>
                </label>
            </li>

            <li className={s.ingredients__item} ><input className={s.ingredients__input}
                                                        type="checkbox" id="id6"/>
                <label className={s.ingredients__label} htmlFor="id6">
                    <img src="http://127.0.0.1:5000/photos/ingridients/image_6.png"/>
                    <p className={s.name}>Индейка</p>
                    <span className={s.price}>69 ₽</span>
                </label>
            </li>
        </ul>
    )
}