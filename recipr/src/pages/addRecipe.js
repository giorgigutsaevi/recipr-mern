import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import axios from "axios"

const AddRecipe = () => {
	const navigate = useNavigate();

	const [input, setInput] = useState({
		title: "",
		image: "",
		description: "",
		ingredients: "",
	})

	const isInvalid = input.title === "" || input.title === "" || input.ingredients === "";

	const handleChange = (event) => {
		const { name, value } = event.target;
		setInput(prevState => ({
			...prevState,
			[name]: value,
		}))
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		const newRecipe = {
			title: input.title,
			image: input.image,
			description: input.description,
			ingredients: input.ingredients,
		}
		axios.post("http://localhost:5001/api/v1/recipes", newRecipe)
		navigate("/");
	}


	return (
		<div>
			<h1>Add Your Recipe!</h1>
			<form method="post" onSubmit={handleSubmit} >
				<input
					placeholder='Recipe title'
					type='text'
					onChange={handleChange}
					name="title"
					value={input.title}
				/>
				<input
					placeholder='Add Image'
					type='text'
					onChange={handleChange}
					name="image"
					value={input.image}
				/>
				<input
					placeholder='Add Description...'
					type='text'
					onChange={handleChange}
					name="description"
					value={input.description}
				/>
				<input
					placeholder='Add Ingredients...'
					type='text'
					onChange={handleChange}
					name="ingredients"
					value={input.ingredients}
				/>
				<button disabled={isInvalid}>Submit Recipe</button>
			</form>
		</div>
	)
}

export default AddRecipe;