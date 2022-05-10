import './css/page.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FullScreen from './fullScreen';
import RightsReserved from './RightsReserved';
// import {Button} from 'react-bootstrap';

function App() {
  return (
	<div className='wrapper'>
		<div className="page">
			<FullScreen/>
			<section className='testM'>
				<div className='testMdiv containerM'>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris malesuada, sem sit amet pretium cursus, nunc enim maximus lorem, feugiat malesuada sem lacus cursus nunc. Etiam aliquet tellus eget nulla pellentesque, vel cursus dolor maximus. Phasellus mattis, nunc vel blandit viverra, magna urna accumsan leo, eget iaculis nibh massa in felis. Nunc nec nulla vel ligula rhoncus pharetra nec quis nisi. Maecenas laoreet, libero nec placerat elementum, mi turpis finibus sapien, id venenatis nulla elit quis massa. Sed mollis tortor metus, id porta libero commodo nec. Aenean ligula urna, cursus sit amet nisi eu, porta dictum tortor. Aenean sit amet nibh vitae metus tristique accumsan vitae nec ipsum. Vivamus interdum erat porta aliquet gravida. Integer faucibus, augue ac blandit interdum, nunc urna laoreet purus, vitae efficitur leo eros vitae diam. Suspendisse semper dapibus neque vitae vestibulum. Morbi volutpat varius ligula non auctor. Phasellus dapibus nulla a tempus tempus. Sed suscipit sed orci non semper.</p>
					<p>Quisque congue velit id odio rutrum sagittis at congue mi. Nulla at augue in lectus volutpat venenatis a eu arcu. Sed efficitur porttitor lectus. Mauris sit amet lorem justo. Duis cursus, dui quis dictum rhoncus, elit ipsum varius enim, id pharetra ex nunc sed enim. Fusce pharetra gravida dui. Etiam sed urna est. Nam gravida, nulla nec laoreet suscipit, eros sem cursus nulla, id finibus augue libero sed massa.</p>
				</div>
			</section>
			<RightsReserved/>
		</div>
	</div>
  );
}

export default App;
