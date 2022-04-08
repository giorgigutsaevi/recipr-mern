import axios from 'axios';
import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router';
import "../styles/signup.css"
import AuthContext from '../Context/AuthContext'
import UserContext from "../Context/UserContext";


const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: '',

  })

  const { getLoggedIn } = useContext(AuthContext);
  const { getUser } = useContext(UserContext);
  
  const isInvalid = formData.username === "" || formData.email === "" || formData.password === "";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevInput => (
      {
        ...prevInput,
        [name]: value
      }
    ))
  }

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5001/users/register", formData, {
      withCredentials: true
    });
    await getLoggedIn();
    await getUser();
    navigate("/");

  }

  return (
    <div className='signup'>
      <div className='signup__wrapper'>
        <div className='signup__form'>
          <h1 className='signup__h1'>Sign Up for Recipr</h1>
          <form onSubmit={handleSubmit}>
            <input
              placeholder='Username'
              type='text'
              onChange={handleChange}
              name="username"
              value={formData.username}
            />
            <input
              placeholder='Email'
              type='email'
              onChange={handleChange}
              name="email"
              value={formData.email}
            />
            <input
              placeholder='Password'
              type='password'
              onChange={handleChange}
              name="password"
              value={formData.password}
            />

            <button
              className='signup__button'
              type='submit'
              disabled={isInvalid}>
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup;
