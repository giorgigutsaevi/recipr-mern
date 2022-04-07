import React, { useContext } from "react";
import UserContext from "../../Context/UserContext";
import jwtDecoder from "jwt-decode";
import "./UserProfile.css";

const UserProfile = () => {
  const { userToken, setUserToken } = useContext(UserContext);
  
  var token = userToken;
  var decoded = jwtDecoder(token);

  return <div></div>;
};

export default UserProfile;
