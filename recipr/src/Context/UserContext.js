import React, { useEffect, useState, createContext } from 'react'
import axios from "axios"

const UserContext = createContext();


const UserContextProvider = (props) => {
	const [userToken, setUserToken] = useState(undefined)

	const getUser = async () => {
		const userResponse = await axios.get("http://localhost:5001/authorize")
		setUserToken(userResponse.data);
	}

	useEffect(() => {
		getUser();
	}, [])

	return (
		<UserContext.Provider value={{ userToken, setUserToken }}>
			{props.children}
		</UserContext.Provider>

	)
}

export default UserContext;
export { UserContextProvider };