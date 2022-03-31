import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

function Header() {
	return (
		<nav>
			<div className='logo'>
				<h1>Recipr</h1>
				<img src="/images/logo.png" alt='blog-logo' className='logo__img'></img>
			</div>
			<div className='logo__navlinks'>
				<Link to="/">
					<p>My Recipes</p>
				</Link>
				<Link to="/add">
					<p>Add a Recipe</p>
				</Link>
				<Link to="/about">
					<p>About</p>
				</Link>
				<Link to="/contact-us">
					<p>Contact Us</p>
				</Link>

			</div>

		</nav>
	)
}

export default Header