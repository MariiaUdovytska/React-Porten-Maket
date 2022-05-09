import React from 'react';
import './css/fullScreen.css';
import Schedule from './Schedule';
import NavBarBootstrap from './NavBarBootstrap';



class FullScreen extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<section className='fullScreen'>
				<Schedule/>
				<NavBarBootstrap/>
				<div className='fullScreen__image'>
					<div className='fullScreen__body'>
						<div className='fullScreen__center containerM'>
							<div className='fullScreen__center-logo'>
								<div className='fullScreen__center-logo-name'>Porten</div>
								<span>City</span>
							</div>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus interdum purus, est tortor pulvinar ut in. Fringilla a diam enim sed justo, sed iaculis sagittis. Tortor id eu interdum nec ut iaculis. Penatibus ullamcorper ultricies morbi ipsum sem metus pharetra, mi. Tortor nibh magna feugiat id nunc, dui nisl viverra.</p>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default FullScreen;