import PropTypes from "prop-types";
import React, { Component } from "react";
import "./Company.scss";
import Vedio from "../../../assets/img/video_prevyu.png";
class Company extends Component {
	render() {
		return (
			<section className='company'>
				<div className='container'>
					<div className='company__blog'>
						<div className='company__head'>
							<h2 className='company__heading'>
								О компании <span>LEANGROUP</span>
							</h2>
							<div className='company__main'>
								<div className='vedio__content'>
									<button className='play'>
										<i className='fa-solid fa-play'></i>
									</button>
									<img className='company__images' src={Vedio} alt='images vedio' />
								</div>
								<p className='company__text'>
									Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году и на сегодняшний
									день является ведущей компанией по производству ламинатных и экструзионных туб.
									Имея две технологии – для производства ламинатных и экструзионных туб, <br />{" "}
									<br /> мы предлагаем вам широкий спектр возможностей. Большим преимуществом
									является собственный печатный цех в ламинате и in-line печать в экструзии с
									возможностью различных дополнительных опций декора. Особое внимание уделяется
									работе с поставщиками для контроля и поддержания качества производимой нами
									продукции.
									<br />
									<br /> С января 2018 года компания стала членом Европейской Ассоциации
									производителей туб (ETMA), что подтверждает сильную позицию бренда и на рынке
									Европы.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
export default Company;
