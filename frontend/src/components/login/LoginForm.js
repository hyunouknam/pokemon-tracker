import React from 'react'

const LoginForm = ({ handleLoginSubmit }) => {

  return (
    <form onSubmit={handleLoginSubmit}>
      <label>Username: </label>
      <input type='text' />
      <br />
      <label>Password: </label>
      <input type='password' />
      <br />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default LoginForm