import React, { useContext } from 'react'
import Header from '../components/Header/Header'
import WelcomePage from '../components/WelcomePage/WelcomePage';
import RecipesList from '../components/RecipesList/RecipesList';
import AuthContext from '../Context/AuthContext';
import UserContext from '../Context/UserContext';

const Dashboard = () => {

	const { loggedIn, getLoggedIn } = useContext(AuthContext)
	const {userToken, setUserToken} = useContext(UserContext)

	 

	return (
		<div>
			<Header />
			<h1 className='text-center'>Hello</h1>
			{!loggedIn && <WelcomePage /> }

			{loggedIn && <RecipesList />}
		
		</div>
	)
}

export default Dashboard;