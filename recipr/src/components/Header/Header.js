import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import  styles  from "./headerStyles"

function Header() {
	return (
		<div>
			<Navbar expand="lg" style={styles.Navbar}>
				<Container fluid >
					<Navbar.Brand href="#" style={styles.CustomNavElement}>Recipr</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav
							className="me-auto my-2 my-lg-0"
							style={{ maxHeight: '100px' }}
							navbarScroll
						>
							<Nav.Link href="/" style={styles.CustomNavElement}>My Recipes</Nav.Link>
							<Nav.Link href="/add" style={styles.CustomNavElement}>Add a Recipe</Nav.Link>
							<p></p>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	)
}

export default Header