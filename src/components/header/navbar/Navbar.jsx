import React, { Component } from "react";
import Logo from "../../../assets/img/logo.svg";
import "./Navbar.scss";
class Navbar extends Component {
	render() {
		return (
			<nav className='navbar'>
				<div className='container'>
					<div className='navigations'>
						<a href='#' className='logo__link'>
							<img src={Logo} alt='nav-logo' />
						</a>
						<ul className='nav__list'>
							<li className='nav__list-items'>
								<a href='#' className='nav__list-items__link'>
									Продукция
								</a>
							</li>
							<li className='nav__list-items'>
								<a href='#' className='nav__list-items__link'>
									Сертификаты
								</a>
							</li>
							<li className='nav__list-items'>
								<a href='#' className='nav__list-items__link'>
									Наша команда
								</a>
							</li>
							<li className='nav__list-items'>
								<a href='#' className='nav__list-items__link'>
									О нас
								</a>
							</li>
							<li className='nav__list-items'>
								<a href='#' className='nav__list-items__link'>
									Новости
								</a>
							</li>
							<li className='nav__list-items'>
								<a href='#' className='nav__list-items__link'>
									Вакансии
								</a>
							</li>
							<li className='nav__list-items'>
								<a href='#' className='nav__list-items__link'>
									Контакты
								</a>
							</li>
						</ul>
						<label className='switch'>
							<input type='checkbox' />
							<span className='slider'></span>
						</label>
					</div>
				</div>
			</nav>
		);
	}
}

export default Navbar;
