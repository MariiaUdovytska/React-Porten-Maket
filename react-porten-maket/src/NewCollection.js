import React from 'react';
import './css/newCollection.css';


class NewCollection extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<section className='newCollection'>
				<div className='newCollection__body'>
					<div className='newCollection__body-left'>
						<h1 className='newCollection__body-left-title titleM'>СЕЗОН 2020/21</h1>
						<div className='newCollection__body-left-watchVersions'>
							<ul>
								<li></li>
								<li></li>
								<li></li>
							</ul>
						</div>
					</div>
					<div className='newCollection__body-right'>
						<div className='newCollection__body-right-content'>
							<h2 className='newCollection__body-rightt-content-title titleM'>Новая коллекция</h2>
							<button type='submit' className='newCollection__body-right-content-btn'>Каталог</button>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default NewCollection;