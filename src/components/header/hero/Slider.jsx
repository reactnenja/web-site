import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Hero1 from "../../../assets/img/hero.svg";

function HeroSlider() {
	return (
		<Splide
			options={{
				rewind: true,
				gap: "1rem",
			}}
			aria-label='My Favorite Images'>
			<SplideSlide>
				<img src={Hero1} alt='Image 1' />
			</SplideSlide>
			<SplideSlide>
				<img src={Hero1} alt='Image 2' />
			</SplideSlide>
			<SplideSlide>
				<img src={Hero1} alt='Image 2' />
			</SplideSlide>
			<SplideSlide>
				<img src={Hero1} alt='Image 2' />
			</SplideSlide>
			<SplideSlide>
				<img src={Hero1} alt='Image 3' />
			</SplideSlide>
		</Splide>
	);
}

export default HeroSlider;
