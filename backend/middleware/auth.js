import jwt from "jsonwebtoken"
import User from "../models/User.js"

const auth = async (req, res, next) => {
	try {
		// console.log('from middleware -->>>', req.cookies.token)
		const token = req.cookies.token;

		if(!token){
			return res.status(401).json({errorMessage: "Unauthorized"})
		}

		const verified = jwt.verify(token, process.env.JWT_SECRET);
		console.log('verified', verified)
		// req.user = verified.user;
		req.user = verified

		next();
	} catch (err) {
		console.log(err)
		res.status(401).json({errorMessage: "Unauthorized"})
	}
}


export default auth;