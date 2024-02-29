import React, { Component } from "react";
import "./Form.scss";
class Form extends Component {
	render() {
		return (
			<section className='form'>
				<div className='container'>
					<div className='form-main'>
						<div className='form__head'>
							<h2>
								Получить подробную <span>информацию</span>
							</h2>
							<p>Просто заполните форму, наш менеджер свяжется с вами в ближайшее время</p>
						</div>
						<div className='form__content'>
							<div className='main__input'>
								<label htmlFor='name'>
									<i className='fa-solid fa-user'></i>
									<input type='text' id='name' name='name' placeholder='Ваше имя' />
								</label>
								<label htmlFor='name'>
									<i className='fa-solid fa-phone'></i>
									<input type='text' id='name' name='name' placeholder='+375 (29) 0000000' />
								</label>
							</div>
							<textarea name='name' id='name' className='text__comment'>
								Комментарий
							</textarea>
							<button className='btn__info'>Получить информацию</button>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Form;
