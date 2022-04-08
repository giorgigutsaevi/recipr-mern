/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useContext } from 'react'
import { Navbar, Nav, TabContainer } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import AuthContext from '../../Context/AuthContext'
import "./Header.css"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import LogoutIcon from '@mui/icons-material/Logout';

function Header() {

	const navigate = useNavigate();
	const { loggedIn, getLoggedIn } = useContext(AuthContext)

	const handleLogout = async (e) => {
		e.preventDefault();
		await axios.get("http://localhost:5001/users/logout");
		await getLoggedIn();
		navigate("/")
	}

	return (
		<Navbar expand="lg" className='navbar'>
			<div className='navbar__logo--wrapper'>
				<img className='navbar__logo' alt='navbar-logo' src='https://static.thenounproject.com/png/171178-200.png'></img>
				<Navbar.Brand className='navbar__brand'>Recipr</Navbar.Brand>
			</div>
			<Container fluid className='navbar__container' >
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse className='navbar__toggle' id="navbarScroll">
					<TabContainer
						navbarScroll
					>
						{loggedIn ?
							(
								<>
									<Nav>
										<Nav.Link href="/" className='navbar__brand' >My Recipes</Nav.Link>
										<Nav.Link href="/add" className='navbar__brand'><AddCircleOutlineIcon />  Add a Recipe</Nav.Link>
									</Nav>
									<Nav.Link onClick={handleLogout} className='navbar__logout'>Log out <LogoutIcon /></Nav.Link>
								</>
							) :
							(<>
								<Nav.Link href="/login" className='navbar__logout'>Log in</Nav.Link>
								<Nav.Link href="/signup" className='navbar__logout'>Sign up</Nav.Link>
							</>
							)}
					</TabContainer>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Header