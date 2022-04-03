import React, { useState } from 'react'
import "../styles/login.css"

const Login = () => {
  const [loginInput, setLoginInput] = useState({
    username: "",
    email: "",
    password: '',

  })

  const isInvalid = loginInput.username === "" || loginInput.email === "" || loginInput.password === "";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInput(prevInput => {
      return {
        ...prevInput,
        [name]: value,
      }
    })
  }

  console.log(loginInput);

  const handleLogin = () => {

  }
  return (
    <div className='login'>
      <div className='login__wrapper'>
        <div className='login__form'>
          <h1 className='login__h1'>Login to Recipr</h1>
          <form onSubmit={handleLogin} >
            <input
              placeholder='Username'
              type='text'
              onChange={handleChange}
              name="username"
              value={loginInput.username}
            />
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
