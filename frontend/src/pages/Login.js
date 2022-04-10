import React from 'react'
import LoginForm from '../components/login/LoginForm'

const Login = ({ handleLoginSubmit }) => {
  return (
    <div>
      <LoginForm handleLoginSubmit={handleLoginSubmit} />
    </div>
  )
}

export default Login