/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import UserContext from "../../Context/UserContext";
import jwtDecode from "jwt-decode";
import "./UserProfile.css";
import { useDate } from "../../hooks/useTime";

const UserProfile = () => {
  const [username, setUsername] = useState("");
  const { userToken } = useContext(UserContext);

  const { time, wish } = useDate();

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

  useEffect(() => {
		const fetchWeatherData = async () => {
			const result = await axios.get("http://localhost:5001/weather")
			const data = await result.data
			console.log(data)
		}
		fetchWeatherData()
  }, []);

  return (
    <div className="userProfile">
      <div className="userProfile--message__wrapper">
        <h1 className="userProfile__title">
          {wish} {username} 👋{" "}
        </h1>
        <h5 className="userProfile__date">{displayDate()}</h5>
      </div>
      <div className="userProfile--timeWeather__wrapper">
        <h5>⌚️ {time}</h5>
        <p>🌡 </p>
      </div>
    </div>
  );
};

export default UserProfile;
