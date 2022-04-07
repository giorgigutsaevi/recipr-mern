/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import Header from '../components/Header/Header'
import WelcomePage from '../components/WelcomePage/WelcomePage';
import RecipesList from '../components/RecipesList/RecipesList';
import AuthContext from '../Context/AuthContext';
import UserProfile from '../components/UserProfile/UserProfile';

const Dashboard = () => {

	const { loggedIn, getLoggedIn } = useContext(AuthContext)

	return (
		<div>
			<Header />
			{loggedIn && <UserProfile/>}
			{!loggedIn && <WelcomePage /> }

			{loggedIn && <RecipesList />}
		
		</div>
	)
}

export default Dashboard;