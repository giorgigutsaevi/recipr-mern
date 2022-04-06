import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import "../styles/signup.css"

const Signup = () => {
  const [signUpInput, setSignUpInput] = useState({
    username: "",
    email: "",
    password: '',

  })

  const isInvalid = signUpInput.username === "" || signUpInput.email === "" || signUpInput.password === "";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpInput(prevInput => (
      {
        ...prevInput,
        [name]: value
      }
    ))
  }

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5001/users/register", signUpInput);
    navigate("/")
  }


  return (
    <div className='signup'>
      <div className='signup__wrapper'>
        <div className='signup__form'>
          <h1 className='signup__h1'>Sign Up for Recipr</h1>
          <form onSubmit={handleSubmit} >
            <input
              placeholder='Username'
              type='text'
              onChange={handleChange}
              name="username"
              value={signUpInput.username}
            />
            <input
              placeholder='Email'
              type='email'
              onChange={handleChange}
              name="email"
              value={signUpInput.email}
            />
            <input
              placeholder='Password'
              type='password'
              onChange={handleChange}
              name="password"
              value={signUpInput.password}
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
