import express from "express"
import Cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"

import RecipeSchema from "./models/Recipe.js"

dotenv.config();

const uri = process.env.RECIPR_DB_URI;
mongoose.connect(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})

// configuring the server
const app = express();
const port = 5001;

// setting up the middleware
app.use(express.json());
app.use(Cors());

// API ENDPOINT configuration
app.get("/", (req, res) => {
	res.status(200).send("welcome to recipr!")
})

app.get("/api/v1/recipes", (req, res) => {
	RecipeSchema.find((err, data) => {
		if (err) {
			res.status(500).send(err)
		} else {
			res.status(200).send(data)
		}
	})
})

app.post("/api/v1/recipes", (req, res) => {
	const data = req.body;
	const newData = new RecipeSchema(data)
	newData.save()
})

// Listener
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
})


