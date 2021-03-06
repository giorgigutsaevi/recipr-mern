import express from 'express'
import RecipeModel from "../models/Recipe.js"
import auth from "../middleware/auth.js"

const router = express.Router()


// getting all recipes
router.get('/api/v1/recipes', auth, async (req, res) => {
	try {
		const recipes = await RecipeModel.find({user: req.user._id})
		res.send(recipes)
	} catch (err) {
		res.status(500).send(err)
	}
})

// Posting a recipe
router.post("/api/v1/recipes", auth, async (req, res) => {

	const recipe = await RecipeModel.create({
		title: req.body.title,
		image: req.body.image,
		description: req.body.description,
		ingredients: req.body.ingredients,
		user: req.user._id

	})

	try {
		await recipe.save()

	} catch (error) {
		console.log(error)
	}
})

// Deleting a recipe
router.delete("/delete/:id", auth, (req, res) => {
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
router.put("/edit/:id", auth, (req, res) => {
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