import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cookieParser from 'cookie-parser'

import recipeRoute from "./routes/recipeRoutes.js"
import userRoute from "./routes/userRoutes.js"
import weatherRouter from "./routes/weather.js"

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
app.use(cookieParser())
app.use(cors({
	origin: ["http://localhost:3000"],
	credentials: true,
}));

app.get("/", (req, res) => {
	res.status(200).send("welcome to recipr!")
})

// API Middleware
app.use("/", recipeRoute);
app.use("/", userRoute);
app.use("/", weatherRouter)



// Listener
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
})


