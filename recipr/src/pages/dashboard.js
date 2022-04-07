import React, { useContext } from 'react'
import Header from '../components/Header/Header'
import WelcomePage from '../components/WelcomePage/WelcomePage';
import RecipesList from '../components/RecipesList/RecipesList';
import AuthContext from '../Context/AuthContext';
import UserContext from '../Context/UserContext';
import UserProfile from '../components/UserProfile/UserProfile';

const Dashboard = () => {

	const { loggedIn, getLoggedIn } = useContext(AuthContext)
	const {userToken, setUserToken} = useContext(UserContext)

	 

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