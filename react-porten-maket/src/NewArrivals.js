import React from 'react';
import './css/newArrivals.css';
import WatchVersions from './WatchVersions';

class NewArrivals extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<section className='newArrivals'>
				<div className='containerM'>
					<div className='newArrivals__body'>
						<h2 className='newArrivals__body-title titleM'>новые поступления</h2>
						<ul>
							<li><WatchVersions watchImg={require("./img/watch/watch.png")} watchName={'Louis XVI ATHOS'} watchPrice={'2 650 $'}/></li>
							<li><WatchVersions watchImg={require("./img/watch/watch.png")} watchName={'Louis XVI ATHOS'} watchPrice={'2 650 $'}/></li>
							<li><WatchVersions watchImg={require("./img/watch/watch.png")} watchName={'Louis XVI ATHOS'} watchPrice={'2 650 $'}/></li>
							<li><WatchVersions watchImg={require("./img/watch/watch.png")} watchName={'Louis XVI ATHOS'} watchPrice={'2 650 $'}/></li>
							<li><WatchVersions watchImg={require("./img/watch/watch.png")} watchName={'Louis XVI ATHOS'} watchPrice={'2 650 $'}/></li>
							<li><WatchVersions watchImg={require("./img/watch/watch.png")} watchName={'Louis XVI ATHOS'} watchPrice={'2 650 $'}/></li>
							<li><WatchVersions watchImg={require("./img/watch/watch.png")} watchName={'Louis XVI ATHOS'} watchPrice={'2 650 $'}/></li>
							<li><WatchVersions watchImg={require("./img/watch/watch.png")} watchName={'Louis XVI ATHOS'} watchPrice={'2 650 $'}/></li>
						</ul>
					</div>
				</div>
			</section>
		)
	}
}

export default NewArrivals;