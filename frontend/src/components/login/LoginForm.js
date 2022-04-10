import React, { useState } from 'react'

const LoginForm = ({ handleLoginSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  return (
    <form onSubmit={(event) => handleLoginSubmit(username, password, event)}>
      <label>Username: </label>
      <input type='text' onChange={handleUsernameChange} />
      <br />
      <label>Password: </label>
      <input type='password' onChange={handlePasswordChange} />
      <br />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default LoginForm