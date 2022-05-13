import React from 'react';
import './css/watchVersions.css';

class WatchVersions extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<div className='watchVersions'>
				<div className='watchVersions__body'>
					<div className='watchVersions__body-watch'><img src={this.props.watchImg} alt="watch" /></div>
					<div className='watchVersions__body-info'>
						<h3 className='watchVersions__body-info-name'>{this.props.watchName}</h3>
						<p className='watchVersions__body-info-price'>{this.props.watchPrice}</p>
					</div>
				</div>
			</div>
		)
	}
}

export default WatchVersions;