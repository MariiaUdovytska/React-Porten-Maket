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
							{/* <Nav className="me-auto">
								<Nav.Link href="#features">Features</Nav.Link>
								<Nav.Link href="#pricing">Pricing</Nav.Link>
								
							</Nav> */}
							<Nav>
								<Nav.Link href="#features">Понравилось</Nav.Link>
								<Nav.Link href="#features">личный кабинет</Nav.Link>
								<Nav.Link href="#features">настройки</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</div>
		)
	}
}

export default NavBarBootstrap;