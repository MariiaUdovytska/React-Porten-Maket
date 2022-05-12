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
								<li> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi u</li>
								<li>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </li>
								<li>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </li>
							</ul>
						</div>
					</div>
					<div className='newCollection__body-right'>
						<div className='newCollection__body-right-content'>
							<h2 className='newCollection__body-right-content-title titleM'>Новая коллекция</h2>
							<button type='submit' className='newCollection__body-right-content-btn'>Каталог</button>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default NewCollection;