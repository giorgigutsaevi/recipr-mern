import express from "express"
import Cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"

import recipeRoute from "./routes/recipeRoutes.js"

// import RecipeModel from "./models/Recipe.js"

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

app.get("/", (req, res) => {
	res.status(200).send("welcome to recipr!")
})

// API Middleware
app.use("/", recipeRoute)




// Listener
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
})


