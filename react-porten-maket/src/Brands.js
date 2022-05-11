import React from 'react';
import './css/brands.css';
import brands from './img/brands/brandss.svg';


class Brands extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<section className='brands'>
				<div className='containerM'>
					<div className='brands__body'>
						<h2 className='brands__body-title titleM'>наши бренды</h2>
						<div className='brands__body-imgs'>
							<span><img src={brands} alt="brands" /></span>
							<span><img src={brands} alt="brands" /></span>
							<span><img src={brands} alt="brands" /></span>
							<span><img src={brands} alt="brands" /></span>
						</div>
					</div>
				</div>
				
			</section>
		)
	}
}

export default Brands;