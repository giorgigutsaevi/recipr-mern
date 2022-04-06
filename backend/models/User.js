import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		min: 6,
	},
	email: {
		type: String,
		required: true,
		min: 6,
		unique: true,
	},
	password: {
		type: String,
		required: true,
		min: 3,
	},
}, {timestamps: true})

export default mongoose.model("User", UserSchema)