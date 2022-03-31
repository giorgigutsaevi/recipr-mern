import React from 'react'

const AddRecipe = () => {
	return (
		<div>
			<h1>Add Recipe!</h1>
			<form method="POST">
				<input
					placeholder='Recipe title'
					type='text'
				/>
				<input
					placeholder='Add Image'
					type='text'
				/>
				<input
					placeholder='Add Description...'
					type='text'
				/>
				<input
					placeholder='Add Ingredients...'
					type='text'
				/>
				<button
				>
					Submit Recipe
				</button>
			</form>
		</div>
	)
}

export default AddRecipe;