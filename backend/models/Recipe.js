import mongoose from "mongoose"

const Recipe = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'user',
	},
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

export default mongoose.model("recipe", Recipe)