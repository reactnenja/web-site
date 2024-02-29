import React, { Component } from "react";
import ProImages from "../../../assets/img/pro-1.png";
import ProImages2 from "../../../assets/img/pr-2.png";
import ProImages3 from "../../../assets/img/pr-3.png";
import ProImages4 from "../../../assets/img/pr-4.png";
import ProImages5 from "../../../assets/img/pr-5.png";
import "./Product.scss";
class Product extends Component {
	render() {
		return (
			<section className='product'>
				<div className='container'>
					<div className='product__header'>
						<h2 className='product__heading'>
							Наша <span>продукция</span>
						</h2>
						<button className='head__btn'>Ламинатные тубы</button>
						<button className='head__btn active'>Экструзионные тубы</button>
						<button className='head__btn'>Другая упаковка</button>
					</div>
					<div className='product__body'>
						<div className='product__main'>
							<img src={ProImages} alt='images__product' />
							<img src={ProImages2} alt='images__product' />
							<img src={ProImages3} alt='images__product' />
							<img src={ProImages4} alt='images__product' />
							<img src={ProImages5} alt='images__product' />
						</div>
						<div className='product__foot'>
							<button className='product__tagbtn'>Перейти в каталог</button>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Product;
