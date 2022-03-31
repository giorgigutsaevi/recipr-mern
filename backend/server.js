import express from "express"
import Cors from "cors"
import dotenv from "dotenv"

dotenv.config();

// configuring the server
const app = express();
const port = 5001;

// setting up the middleware
app.use(express.json());
app.use(Cors());

app.get("/", (req, res) => {
	res.status(200).send("Homepage")
})


// Listener
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
})


