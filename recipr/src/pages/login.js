import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'
import "../styles/login.css"
import { useContext } from 'react'
import AuthContext from '../Context/AuthContext'

const Login = () => {
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: '',
  })

  const { getLoggedIn } = useContext(AuthContext);

  const isInvalid = loginInput.email === "" || loginInput.password === "";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInput(prevInput => {
      return {
        ...prevInput,
        [name]: value,
      }
    })
  }

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5001/users/login", loginInput);
    await getLoggedIn()
    navigate("/")
  
  }
  return (
    <div className='login'>
      <div className='login__wrapper'>
        <div className='login__form'>
          <h1 className='login__h1'>Login to Recipr</h1>
          <form onSubmit={handleLogin} >
            <input
              placeholder='Email'
              type='email'
              onChange={handleChange}
              name="email"
              value={loginInput.email}
            />
            <input
              placeholder='Password'
              type='password'
              onChange={handleChange}
              name="password"
              value={loginInput.password}
            />

            <button
              className='login__button'
              type='submit'
              disabled={isInvalid}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;
