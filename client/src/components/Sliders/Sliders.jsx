import s from "./Sliders.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/scrollbar";
import "swiper/css/autoplay";

export function Sliders() {
	return (
		<>
			<div className={s.Sliders_div}>
				<Swiper
					slidesPerView={1.22}
					spaceBetween={30}
					slidesPerGroup={1}
					loop={true}
					loopFillGroupWithBlank={true}
					navigation={true}
					className={s.mySwiper}
				>
					<SwiperSlide className={s.com_card}>
						<div className={s.slidesPerView}>
							<img
								src={require("../images/slider/slide-central.webp")}
								className={s.card}
								alt="slide-central.webp"
							/>
						</div>
					</SwiperSlide>

					<SwiperSlide className={s.com_card}>
						<img
							src={require("../images/slider/slide-reght.png")}
							className={s.card}
							alt="slide-central.webp"
						/>
					</SwiperSlide>
					<SwiperSlide className={s.com_card}>
						<img
							src={require("../images/slider/slide-left.png")}
							className={s.card}
							alt="slide-central.webp"
						/>
					</SwiperSlide>
				</Swiper>
			</div>
		</>
	);
}

<img
	src={require("../images/slider/slide-left.png")}
	className={s.card}
	alt="slide-central.webp"
/>;
