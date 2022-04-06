import express from 'express'
import RecipeModel from "../models/Recipe.js"

const router = express.Router()

// getting all recipes
router.get('/api/v1/recipes', (req, res) => {
	RecipeModel.find((err, data) => {
		if (err) {
			res.status(500).send(err)
		} else {
			res.status(200).send(data)
		}
	})
})

// Posting a recipe
router.post("/api/v1/recipes", async (req, res) => {
	const newItem = new RecipeModel(req.body)
	try {
		await newItem.save()

	} catch (error) {
		console.log(error)
	}
})

// Deleting a recipe
router.delete("/delete/:id", (req, res) => {
	const recipeId = req.params.id
		RecipeModel.findByIdAndDelete({ _id: recipeId }, (req, res, err) => {
			if (!err) {
				console.log("Item deleted")
			} else {
				console.log(err)
			}
		})
})

// Editing a recipe
router.put("/edit/:id", (req, res) => {
	const recipeId = req.params.id
	const updatedRecipe = {
		title: req.body.title,
		image: req.body.image,
		description: req.body.description,
		ingredients: req.body.ingredients,

	}
	RecipeModel.findByIdAndUpdate(
		{ _id: recipeId },
		{ $set: updatedRecipe },
		(req, res, err) => {
			if (!err) {
				console.log("Item updated")
			} else {
				console.log(err)
			}
		})
})








export default router;