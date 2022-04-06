import axios from 'axios'
import React, { useContext } from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import { Container } from 'react-bootstrap'
import styles from "./headerStyles"
import AuthContext from '../../Context/AuthContext'

function Header() {

	const navigate = useNavigate();
	const { loggedIn, getLoggedIn } = useContext(AuthContext)
	console.log(loggedIn)

	const handleLogout = async (e) => {
		e.preventDefault();
		await axios.get("http://localhost:5001/users/logout");
		await getLoggedIn();
		navigate("/login")
	}

	return (

		<Navbar expand="lg" style={styles.Navbar}>
			<Container fluid >
				<Navbar.Brand href="#" style={styles.CustomNavElement}>Recipr</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">

					<Nav
						className="me-auto my-2 my-lg-0"

						navbarScroll
					>
						<Nav.Link href="/" style={styles.CustomNavElement}>My Recipes</Nav.Link>
						<Nav.Link href="/add" style={styles.CustomNavElement}>Add a Recipe</Nav.Link>
						{loggedIn ?
							(
								<Nav.Link onClick={handleLogout} style={styles.Logout}>Log out</Nav.Link>
							) :
							(<>
								<Nav.Link onClick={handleLogout} style={styles.Logout}>Log in</Nav.Link>
								<Nav.Link onClick={handleLogout} style={styles.Logout}>Sign up</Nav.Link>
							</>
							)}

					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>

	)
}

export default Header