/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from "react";
import UserContext from "../../Context/UserContext";
import jwtDecode from "jwt-decode";
import "./UserProfile.css";

const UserProfile = () => {
  const [username, setUsername] = useState("");
  const { userToken } = useContext(UserContext);
	console.log("FROM USER PROFILE -----> ", userToken)


  useEffect(() => {
    if (userToken) {
      const decoded = jwtDecode(userToken);
      const decodedUsername = decoded.username
			setUsername(decodedUsername)
    }
  }, []);

  return (
    <div>
      <h1>Welcome, {username}</h1>
    </div>
  );
};

export default UserProfile;
