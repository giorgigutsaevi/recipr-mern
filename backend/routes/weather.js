import express from 'express'
import axios from 'axios'

const router = express.Router()

router.get("/weather", async (req, res) => {

	try {
		const result = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${process.env.API_WEATHER_KEY}`);
		const weatherData = await result.data
		res.send(weatherData)
	} catch (error) {
		console.log(error)
	}

})

export default router;