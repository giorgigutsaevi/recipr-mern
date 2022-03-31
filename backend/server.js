import express from "express"
import Cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"

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
app.get("/api/v1/recipes", (req, res) => {
	res.status(200).send("Homepage")
})


// Listener
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
})


