import s from './Order.module.css'
import {Container} from "../Container/Container";
import {Footer} from "../../UI/Footer/Footer";
import {DoDoPizza} from "../DoDoPizza/DoDoPizza";


export function Order() {
    return (
        <>
                <header className={s.header}>
                        <DoDoPizza/>
                        <ol className={s.wrapper_round}>
                            <li className={s.round}>1</li>
                            <div className={s.line}></div>
                            <li className={s.round}>2</li>
                            <div className={s.line}></div>
                            <li className={s.round}>3</li>
                        </ol>
                </header>
            <Container>
                <main>
                    <h2 className={s.headerLine}>Заказ на доставку</h2>
                    <div className={s.order__holder}>
                        <div className={s.order__inputFields}>

                            <div className={s.order__items}>
                                <label htmlFor="name">Имя:</label>
                                <input type="text" id="name" name="name"/>
                            </div>
                            <div className={s.order__items}>
                                <label  for="phone" >Номер телефона:</label>
                                <input  type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
                            </div>

                            <div className={`${s.order__items}  ${s.order__items__big}` }>
                                <label htmlFor="deliver">Куда доставить:</label>
                                <input type="text" id="deliver" name="deliver"/>
                            </div>
                            <div className={s.order__wraperBtn}>
                                <button className={`${s.btn} ${s.btn__gray}`}>  <span> &#65308;</span> Вернуться в меню  </button>
                                <button className={`${s.btn} ${s.btn__orange}`}>Оформить заказ <span> &#65310;</span>  </button>
                            </div>

                            </div>
                        <div className={s.aside}>
                            <ul className={s.heading}>Состав заказа
                                <li>
                                    <div className={s.wrapper__food}>
                                        <div className="food">
                                            <p className={s.title}>Coca-Cola</p>
                                            <p className={s.title}>Coca-Cola</p>
                                        </div>
                                        <p className={s.price}>3 × 75 ₽</p>
                                    </div>
                                    <span className={s.massProduct}>0,5 л</span>
                                </li>
                                <li>
                                    <div className={s.wrapper__food}>
                                        <div className="food">
                                            <p className={s.title}>Рулетики с ананасами</p>
                                            <p className={s.title}>Рулетики с брусникой</p>
                                        </div>
                                        <p className={s.price}>195 ₽</p>
                                    </div>
                                    <span className={s.massProduct}>16 шт</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </main>
                <Footer/>
            </Container>
        </>
    )
}