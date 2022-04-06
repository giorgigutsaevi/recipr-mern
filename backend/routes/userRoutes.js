import express from 'express'
import bcrypt from 'bcryptjs'
import UserModel from "../models/User.js"
import jwt from 'jsonwebtoken'

const router = express.Router();

// Register a user
router.post("/users/register", async (req, res) => {
	// check if the email exists
	const emailExist = await UserModel.findOne({ email: req.body.email });
	if (emailExist) {
		return res.status(400).send("Email already exists")
	}

	// HASH the password
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(req.body.password, salt)

	// create the user
	const user = new UserModel({
		username: req.body.username,
		email: req.body.email,
		password: hashedPassword,
	})
	try {
		const savedUser = await user.save()
		res.send(savedUser)

		const token = jwt.sign({
			_id: user.id,
			email: user.email
		}, process.env.JWT_SECRET)

		res.cookie("token", token, {
			httpOnly: true,
		})
			.send();
	} catch (err) {
		res.status(400).send(err)
	}
})

// Logging in the user
router.post("/users/login", async (req, res) => {

	try {
		const { email, password } = req.body;
		// Validating
		if (!email || !password) {
			return res.status(400).send("Please enter all required fields")
		}

		const user = await UserModel.findOne({ email: req.body.email });

		if (!user) {
			return res.status(401).send("Invalid credentials")
		}

		// Sign the token
		if (user) {
			const token = jwt.sign({
				_id: user.id,
				email: user.email
			}, process.env.JWT_SECRET)

			res.cookie("token", token, {
				httpOnly: true,
			})
				.send();

			console.log(token)
			return res.json({ status: 'ok', user: token })
		}

	} catch (err) {
		res.status(400).send(err)
	}

})


// Logging out the user
router.get("/users/logout", (req, res) => {
	res.cookie("token", "", {
		httpOnly: true,
		expires: new Date(0)
	})
		.send("Logged Out!");

})


export default router;