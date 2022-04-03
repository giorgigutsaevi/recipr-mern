import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import axios from "axios"
import "./styles/addRecipe.css"


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

	const _createRecipe = () => {
		const newRecipe = {
			title: input.title,
			image: input.image,
			description: input.description,
			ingredients: input.ingredients,
		}
		axios.post("http://localhost:5001/api/v1/recipes", newRecipe);
	}

	const handleSubmit = () => {
		_createRecipe()
		navigate("/");
	}

	return (
		<div className='body'>
			<div className='form--wrapper'>
				<h1 className='text-center add-h1'>Add Your Recipe</h1>
				<form className='form' method="post" onSubmit={handleSubmit}>
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
					<button className='addButton' type='submit' disabled={isInvalid}>Submit Recipe</button>
				</form>
			</div>
			</div>
	)
}

export default AddRecipe;

{/* <div className='body'>
			<div className='form--wrapper'>
				<div className='edit--form'>
					<h1 className='form--h1'>Update Your Recipe</h1>
					<input
						placeholder='Recipe title'
						type='text'
						onChange={handleUpdate}
						name="title"
						value={updatedItem.title}
					/>
					<input
						placeholder='Image URL'
						type='text'
						onChange={handleUpdate}
						name="image"
						value={updatedItem.image}
					/>
					<input
						placeholder='Add Description...'
						type='text'
						onChange={handleUpdate}
						name="description"
						value={updatedItem.description}
					/>
					<input
						placeholder='Add Ingredients...'
						type='text'
						onChange={handleUpdate}
						name="ingredients"
						value={updatedItem.ingredients}
					/>
					<button className='updateButton' type='submit' onClick={() => updateItem(updatedItem.id)} disabled={updatedBtnisInvalid}>Update Recipe</button>
				</div>
			</div>
		</div> */}