import React from 'react';
import './css/footer.css';


class Footer extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<footer className='footer'>
				<div className='footer__img'>
					<div className='footer__body containerM'>
						<div className='footer__body-left'>
							<div className='footer__body-title'>О магазине</div>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus tortor lectus nunc nulla nibh. Egestas amet consectetur vel vitae aliquam dictum suspendisse. Lobortis eget consequat, tellus et et sed turpis. Pretium quisque vitae, amet, porttitor odio ultricies massa pharetra leo. Et ipsum urna fames in sit mi ultrices nisi, nunc.</p>
						</div>
						<div className='footer__body-center'>
							<div className='footer__body-title'>Категории</div>
							<div className='footer__body-center-btns'>
								<button className='footer__body-center-btns-btn'>часы</button>
								<button className='footer__body-center-btns-btn'>браслеты</button>
								<button className='footer__body-center-btns-btn'>ремни</button>
								<button className='footer__body-center-btns-btn'>ювелирные изделия</button>
								<button className='footer__body-center-btns-btn'>ювелирные изделия</button>
							</div>
						</div>
						<div className='footer__body-right'>
							<div className='footer__body-title'>РАссылка</div>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus tortor lectus nunc nulla nibh.</p>
							<div className='footer__body-right-mailUser'>
								<input className='footer__body-right-input' type='text' placeholder='Ваша почта' aria-label='Email'/>
								<button className='footer__body-right-btn' type='submit'>ПОДПИСАТЬСЯ</button>
							</div>
						</div>
					</div>
				</div>
			</footer>
		)
	}
}

export default Footer;