import axios from 'axios'
import React, { useContext } from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import { Container } from 'react-bootstrap'
import styles from "./headerStyles"
import AuthContext from '../../Context/AuthContext'

function Header() {

	const navigate = useNavigate();
	const { getLoggedIn } = useContext(AuthContext)

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
						<Nav.Link onClick={handleLogout} style={styles.Logout}>Logout</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>

	)
}

export default Header