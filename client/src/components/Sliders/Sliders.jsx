import s from "./Sliders.module.css";
import { Scrollbar, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/scrollbar";
import "swiper/css/autoplay";

export function Sliders() {
	return (
		<>
			<Swiper
				modules={[Scrollbar, Autoplay]}
				spaceBetween={30}
				slidesPerView={1}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false
				}}
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				onSwiper={(swiper) => console.log(swiper)}
				onSlideChange={() => console.log("slide change")}
			>
				<SwiperSlide>
					<img
						src={require("../images/slider/slide-left.png")}
						className={s.card}
						alt="slide-central.webp"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src={require("../images/slider/slide-central.webp")}
						className={s.card}
						alt="slide-central.webp"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src={require("../images/slider/right-promo.png")}
						className={s.card}
						alt="slide-central.webp"
					/>
				</SwiperSlide>
			</Swiper>
		</>
	);
}
