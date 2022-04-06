import express from 'express'
import bcrypt from 'bcryptjs'
import UserModel from "../models/User.js"
import jwt from 'jsonwebtoken'

const router = express.Router();

// Create a user
router.post("/users/register", async (req, res) => {
	const emailExist = await UserModel.findOne({ email: req.body.email });
	if (emailExist) {
		return res.status(400).send("Email already exists")
	}

	// HASH the password
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(req.body.password, salt)

	console.log(req.body)
	const user = new UserModel({
		username: req.body.username,
		email: req.body.email,
		password: hashedPassword,
	})
	try {
		const savedUser = await user.save()
		res.send(savedUser)
	} catch (err) {
		res.status(400).send(err)
	}
})

router.post("/users/login", async (req, res) => {

	// Checking if email exists
	const user = await UserModel.findOne({ email: req.body.email });
	if (!user) {
		return res.status(400).send("Invalid email")
	}
	if (user){
		const token = jwt.sign({
			_id: user.id,
			email: user.email
		}, process.env.JWT_SECRET)

		console.log(token)
		return res.json({status: 'ok', user: token})
	}
})



export default router;