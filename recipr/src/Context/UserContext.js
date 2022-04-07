import React, { useEffect, useState, createContext } from 'react'
import axios from "axios"

const UserContext = createContext();


const UserContextProvider = (props) => {
	const [userToken, setUserToken] = useState("")

	const getUser = async () => {
		const userResponse = await axios.get("http://localhost:5001/authorize")
		const data = await userResponse.data
		setUserToken(data)
		
	}

	useEffect(() => {
		getUser()
	}, [])



	return (
		<UserContext.Provider value={{ userToken, getUser }}>
			{props.children}
		</UserContext.Provider>

	)
}

export default UserContext;
export { UserContextProvider };