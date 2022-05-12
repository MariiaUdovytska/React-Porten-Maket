import React from 'react';
import WatchVersions from './WatchVersions';
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
								<li><WatchVersions watchImg={require("./img/watch/watch.png")} watchName={'Louis XVI ATHOS'} watchPrice={'2 650 $'}/></li>
								<li><WatchVersions watchImg={require("./img/watch/watch.png")} watchName={'Louis XVI ATHOS'} watchPrice={'2 650 $'}/></li>
								<li><WatchVersions watchImg={require("./img/watch/watch.png")} watchName={'Louis XVI ATHOS'} watchPrice={'2 650 $'}/></li>
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