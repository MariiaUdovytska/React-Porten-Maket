import React from 'react';
import './css/watchVersions.css';
import watch from './img/watch/watch.svg';


class WatchVersions extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<div className='watchVersions'>
				<div className='watchVersions__body'>
					<div className='watchVersions__body-watch'><img src={watch} alt="watch" /></div>
					<div className='watchVersions__body-info'>
						<h3 className='watchVersions__body-info-name'>Louis XVI ATHOS</h3>
						<p className='watchVersions__body-info-price'>2 650 $</p>
					</div>
				</div>
			</div>
		)
	}
}

export default WatchVersions;