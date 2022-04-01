import React from 'react'
import Header from '../components/Header/Header'
import RecipesList from '../components/Recipes/RecipesList';

const Dashboard = () => {
	return (
		<div>
			<Header />
			<RecipesList/>
		</div>
	)
}

export default Dashboard;