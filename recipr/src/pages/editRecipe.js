import axios from 'axios';
import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router'
import EditingContext from '../Context/EditingContext';

const EditRecipe = () => {
	const navigate = useNavigate();

	const { editId } = useContext(EditingContext)
	console.log(editId)

	const [updatedItem, setUpdatedItem] = useState({
		title: "",
		image: "",
		description: "",
		ingredients: "",
		id: '',
	})

	const updatedBtnisInvalid = updatedItem.title === "" || updatedItem.title === "" || updatedItem.ingredients === "";

	const handleUpdate = (e) => {
		const { name, value } = e.target;
		setUpdatedItem(prevState => ({
			...prevState,
			[name]: value,
			id: editId,
		}))
	}

	const updateItem = (id) => {
		axios.put(`http://localhost:5001/edit/${id}`, updatedItem)
		navigate("/")
	}

	return (
		<div>
			<h1>Update Your Recipe!</h1>
			<input
				placeholder='Recipe title'
				type='text'
				onChange={handleUpdate}
				name="title"
				value={updatedItem.title}
			/>
			<input
				placeholder='Add Image'
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
			<button type='submit' onClick={() => updateItem(updatedItem.id)} disabled={updatedBtnisInvalid}>Update Recipe</button>

		</div>
	)
}

export default EditRecipe;