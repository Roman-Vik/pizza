import s from "./Basket.module.css";
import { Container2 } from "../Container2/Container2";
import icon from "..//..//components/images/cart/image 12-2x.webp";
import basket from "..//..//components//images/slider/Basket.svg";
import icon2 from "..//..//components/images/cart/image 13-2x.webp";
import icon3 from "..//..//components/images/cart/image 2-2x.webp";
import icon4 from "..//..//components/images/cart/image 2-2x-1.webp";
import icon5 from "..//..//components/images/cart/image 2-2x-2.webp";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export function Basket() {
	return (
		<>
			<Container2>
				<section className={s.Basket_header}>
					<div className={s.div_h1}>
						<h1 className={s.h1}>Корзина</h1>
					</div>
					<div className={s.line}></div>
					<div className={s.contant}>
						<div className={s.сard}>
							<div className={s.img}>
								<img src={icon} alt="logo" />
							</div>
							<div className={s.info}>
								<p className={s.text}>Чиззи чеддер</p>
								<p className={s.text_simb}>
									Средняя 30 см, традиционное тесто
								</p>
							</div>
						</div>

						<div className={s.btn_info}>
							<div className={s.btn}>
								<button className={s.btn_min}>-</button>
								<p className={s.btn_num}>3</p>
								<button className={s.btn_sum}>+</button>
							</div>
							<div className={s.sum}>
								<p className={s.style_sum}>3 799 ₽</p>
							</div>
							<div className={s.icon}>
								<img
									className={s.img_basket}
									src={basket}
									alt="basket"
								/>
							</div>
						</div>
					</div>
					<div className={s.line}></div>
					<div className={s.contant}>
						<div className={s.сard}>
							<div className={s.img}>
								<img src={icon2} alt="logo2" />
							</div>
							<div className={s.info}>
								<p className={s.text}>Грибной стартер</p>
								<p className={s.text_simb}>1 шт</p>
							</div>
						</div>
						<div className={s.btn_info}>
							<div className={s.btn}>
								<button className={s.btn_min}>-</button>
								<p className={s.btn_num}>1</p>
								<button className={s.btn_sum}>+</button>
							</div>
							<div className={s.sum}>
								<p className={s.style_sum}>159 ₽</p>
							</div>
							<div className={s.icon}>
								<img
									className={s.img_basket}
									src={basket}
									alt="basket"
								/>
							</div>
						</div>
					</div>
					<div className={s.line_but}></div>
				</section>
				<section className={s.Components}>
					<div className={s.div_h2}>
						<h2 className={s.h2}>Добавить к заказу?</h2>
					</div>
					<div>
						<Swiper
							slidesPerView={3}
							spaceBetween={20}
							slidesPerGroup={3}
							loop={true}
							loopFillGroupWithBlank={true}
							navigation={true}
							className="mySwiper"
						>
							<SwiperSlide className={s.com_card}>
								<div className={s.cont_img}>
									<img
										className={s.com_img}
										src={icon3}
										alt="icon3"
									/>
								</div>
								<div className={s.cont_inf}>
									<p className={s.com_text}>
										Молочный коктейль с...
									</p>
									<p className={s.com_btn}>175 ₽</p>
								</div>
							</SwiperSlide>
							<SwiperSlide className={s.com_card}>
								<div className={s.cont_img}>
									<img
										className={s.com_img}
										src={icon4}
										alt="icon3"
									/>
								</div>
								<div className={s.cont_inf}>
									<p className={s.com_text}>
										Рулетики с брусникой
									</p>
									<p className={s.com_btn}>195 ₽</p>
								</div>
							</SwiperSlide>
							<SwiperSlide className={s.com_card}>
								<div className={s.cont_img}>
									<img
										className={s.com_img}
										src={icon5}
										alt="icon3"
									/>
								</div>
								<div className={s.cont_inf}>
									<p className={s.com_text}>
										Картофель из печи
									</p>
									<p className={s.com_btn}>99 ₽</p>
								</div>
							</SwiperSlide>
						</Swiper>
					</div>
				</section>
				<section className={s.summ}>
					<div className={s.div_h3}>
						<h3 className={s.h3}>Сумма заказа: </h3>
						<p className={s.summ_text}> 4 792 ₽</p>
					</div>
				</section>
				<section className={s.head_btn}>
					<div className={s.cont_btn}>
						<button className={s.btn_back}>Вернуться в меню</button>
						<button className={s.btn_start}>Оформить заказ</button>
					</div>
				</section>
			</Container2>
		</>
	);
}
