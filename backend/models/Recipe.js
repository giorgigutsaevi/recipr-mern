import mongoose from "mongoose"

const Recipe = new mongoose.Schema({
	title: {
		type: String, 
		required: true,
	},
	image: {
		type: String,
	},
	description: {
		type: String,
	}, 
	ingredients: [
		{
			type: String,
		}
	]

})

export default mongoose.model("recipes", Recipe);