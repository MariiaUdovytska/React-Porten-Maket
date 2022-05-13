import './css/page.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FullScreen from './fullScreen';
import RightsReserved from './RightsReserved';
import Footer from './Footer';
import Brands from './Brands';
import NewCollection from './NewCollection';
import NewArrivals from './NewArrivals';
import Collections from './Collections';
// import {Button} from 'react-bootstrap';

function App() {
  return (
	<div className='wrapper'>
		<div className="page">
			<FullScreen/>
			<NewCollection/>
			<Collections/>
			<NewArrivals/>
			<Brands/>
			<Footer/>
			<RightsReserved/>
		</div>
	</div>
  );
}

export default App;
