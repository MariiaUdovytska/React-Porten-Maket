import React from 'react';
import './css/navBar.css';
import {Navbar, Nav, Container} from 'react-bootstrap';


class NavBarBootstrap extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<div className='navBar'>
				<Navbar collapseOnSelect expand="lg" variant="dark">
					<Container>
						<Navbar.Brand href="#home">Porten</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
							<Nav>
								<Nav.Link href="#features">Понравилось</Nav.Link>
								<Nav.Link href="#features">личный кабинет</Nav.Link>
								<Nav.Link href="#features">настройки</Nav.Link>
								<Nav.Link href="#features"><i class="bi bi-cart3" style={{ display: 'inline-flex', fontSize: '25px', color: 'white'}}></i></Nav.Link>
								<Nav.Link href="#features" className='navBar__link-search'><i class="bi bi-search" style={{ display: 'inline-flex', fontSize: '25px', color: 'white'}}></i></Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</div>
		)
	}
}

export default NavBarBootstrap;