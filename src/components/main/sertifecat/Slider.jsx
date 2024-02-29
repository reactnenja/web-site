import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";

import React from "react";
import Images from "../../../assets/img/ser-1.png";
import Images2 from "../../../assets/img/ser-2.png";
import Images3 from "../../../assets/img/ser-3.png";
import Images4 from "../../../assets/img/ser-4.png";
import Images5 from "../../../assets/img/ser-5.png";

function Slider() {
	return (
		<Splide
			options={{
				rewind: true,
				gap: "1rem",
			}}>
			<SplideSlide>
				<img src={Images} alt='images slider' />
				<img src={Images2} alt='images slider' />
				<img src={Images3} alt='images slider' />
				<img src={Images4} alt='images slider' />
				<img src={Images5} alt='images slider' />
			</SplideSlide>
			<SplideSlide>
				<img src={Images} alt='images slider' />
				<img src={Images2} alt='images slider' />
				<img src={Images3} alt='images slider' />
				<img src={Images4} alt='images slider' />
				<img src={Images5} alt='images slider' />
			</SplideSlide>
			<SplideSlide>
				<img src={Images} alt='images slider' />
				<img src={Images2} alt='images slider' />
				<img src={Images3} alt='images slider' />
				<img src={Images4} alt='images slider' />
				<img src={Images5} alt='images slider' />
			</SplideSlide>
			<SplideSlide>
				<img src={Images} alt='images slider' />
				<img src={Images2} alt='images slider' />
				<img src={Images3} alt='images slider' />
				<img src={Images4} alt='images slider' />
				<img src={Images5} alt='images slider' />
			</SplideSlide>
			<SplideSlide>
				<img src={Images} alt='images slider' />
				<img src={Images2} alt='images slider' />
				<img src={Images3} alt='images slider' />
				<img src={Images4} alt='images slider' />
				<img src={Images5} alt='images slider' />
			</SplideSlide>
		</Splide>
	);
}
export default Slider;
