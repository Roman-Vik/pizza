import s from "./ModalPizza.module.css"
import {Container} from "../Container/Container";
import x from "../../components/images/Vector.png"
import {ItemSizePizza} from "../ItemSizePizza/ItemSizePizza";
import {ItemTypePizza} from "../ItemTypePizza/ItemTypePizza";
import {Ingredients} from "../Ingridients/Ingredients";
import {Button} from "../Button/Button";

export function  ModalPizza({linkPizza,pizzaDough, setPizzaDough, sizePizza, setSizePizza, setAct}) {
    return (
        <div className={s.wrapperTopping}  onClick={()=> setAct(false)}>
        <Container>
            <div onClick={e => e.stopPropagation()} className={s.topping}>
                <div className={s.left__section}>
                    <div className={s.radius}></div>
                    <div className={s.wrapper_img}>
                        <img src={linkPizza} alt="dddd"/>
                    </div>
                </div>
                <div className={s.right_section}>
                    <h2 className={s.right_section__headLine}>Чиззи чеддер</h2>
                    <p className={s.right_section__text}>{`30 см, традиционное тесто, 480 г`}</p>
                    <div className={s.right_section__selected}>
                        <div className={s.right_section__name}>чеддер
                            <button><img src={x} alt="x"/></button>
                            ,
                        </div>
                        <div className={s.right_section__name}>чеддер
                            <button><img src={x} alt="x"/></button>
                            ,
                        </div>
                    </div>
                    <div className={s.right_section__values}>
                        <div className={s.right_section__radio}>
                            <ItemSizePizza sizePizza={sizePizza} setSizePizza={setSizePizza}/>
                        </div>
                        <div className={s.right_section__radio}>
                            <ItemTypePizza pizzaDough={pizzaDough} setPizzaDough={setPizzaDough}/>
                        </div>
                    </div>
                    <div className={s.ingredients}>
                        <h2 className={s.ingredients__headLine}>Добавить в пиццу</h2>
                        <Ingredients/>
                    </div>
                    <Button> {"Добавить в корзину за 0 ₽"}</Button>
                </div>
            </div>
        </Container>
        </div>
    )
}