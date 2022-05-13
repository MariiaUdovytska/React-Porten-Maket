import React from 'react';
import './css/collections.css';


class Collections extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<section className='collections'>
				<div className='collections__body'>
					<div className='collections__body-left'>
					</div>
					<div className='collections__body-right'>
						<div className='collections__body-right-content'>
							<h2 className='titleM'>коллекция 2018</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non rutrum ornare ut mattis habitant dui arcu. Sagittis amet nunc ut neque quis nibh arcu. Vivamus vestibulum nisi et venenatis sed scelerisque magna consectetur. Amet convallis quis gravida facilisis vulputate. Faucibus facilisi habitasse ipsum interdum dictum aliquet. Velit quis ullamcorper pulvinar nulla malesuada integer. Aenean praesent viverra nulla nullam natoque volutpat curabitur auctor. Viverra viverra ullamcorper scelerisque risus dignissim egestas. Id aliquam a aliquam egestas leo orci pharetra sed diam. </p>
							<button type='submit'>посмотреть коллекцию</button>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Collections;