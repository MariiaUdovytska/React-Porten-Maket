
import React from 'react';
import './css/rightsReserved.css';


class RightsReserved extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<div className='rightsReserved'>
				<div className='rightsReserved__body containerM'>
					<div className='rightsReserved__body-left'>
						
						<span>© 2020 Все права защищены</span>
					</div>
					<div className='rightsReserved__body-right'>
						<span>Сделано</span>
						<a target='_blank' href='https://www.figma.com/community/tag/info/files'> Figma.info </a>
					</div>
				</div>
			</div>
		)
	}
}

export default RightsReserved;