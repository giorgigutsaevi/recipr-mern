import jwt from "jsonwebtoken"

const auth = (req, res, next) => {
	try {
		// console.log('from middleware -->>>', req.cookies.token)
		const token = req.cookies.token;

		if(!token){
			return res.status(401).json({errorMessage: "Unauthorized"})
		}

		const verified = jwt.verify(token, process.env.JWT_SECRET);
		req.user = verified.user;

		next();
	} catch (err) {
		console.log(err)
		res.status(401).json({errorMessage: "Unauthorized"})
	}
}


export default auth;