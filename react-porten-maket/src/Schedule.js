import React from 'react';
import './css/schedule.css';
import call from './img/fullScreen/call.svg';
import singUp from './img/fullScreen/singInUp.svg';


class Schedule extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<div className='schedule'>
				<div className='schedule__body containerM'>
					<div className='schedule__body-left'>
						<img width={13.36} height={13.36} src={call} alt="Call" />
						<span>38 (000) 123-45-67    |</span>
						<span>    Работаем 7 дней в неделю    </span>
						<span>|    9:00 — 18:00</span>
					</div>
					<div className='schedule__body-right'>
						<img width={13.36} height={13.36} src={singUp} alt="Sing Up" />
						<a href='#'>Войти </a>/
						<a href='#'> Регистрация</a>
					</div>
				</div>
				
			</div>
		)
	}
}

export default Schedule;