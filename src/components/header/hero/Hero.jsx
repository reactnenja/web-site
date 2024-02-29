import React, { Component } from "react";
import "./Hero.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import HeroSlider from "./Slider";
class Hero extends Component {
	render() {
		return (
			<section className='hero'>
				<HeroSlider />
				<div className='container'>
					<div className='hero__content'>
						<span className='content__text'>LEANGROUP - тубы и этикетки</span>
						<h2 className='content__heading'>Ламинатные тубы</h2>
						<p className='content__paragriph'>
							Используются для производства зубных паст. Широко применяются в сегменте косметики,
							пищевой индустрии, парафармацевтике, бытовой химии и DIY (Do-it-Yourself).
						</p>
						<button className='content__btn'>Каталог</button>
					</div>
				</div>
			</section>
		);
	}
}

export default Hero;
