/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from "react";
import UserContext from "../../Context/UserContext";
import jwtDecode from "jwt-decode";
import "./UserProfile.css";
import { toDate } from "date-fns/esm";

const UserProfile = () => {
  const [username, setUsername] = useState("");
  const { userToken } = useContext(UserContext);

  const displayDate = () => {
    const currentDate = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return currentDate.toLocaleDateString("en-us", options);
  };

  useEffect(() => {
    if (userToken) {
      const decoded = jwtDecode(userToken);
      const decodedUsername = decoded.username;
      setUsername(decodedUsername);
    }
  }, []);

  return (
    <div className="userProfile">
      <div className='userProfile--message__wrapper'>
        <h1 className="userProfile__title">Welcome, {username} 👋 </h1>
        <h5 className="userProfile__date">{displayDate()}</h5>
      </div>
    </div>
  );
};

export default UserProfile;
