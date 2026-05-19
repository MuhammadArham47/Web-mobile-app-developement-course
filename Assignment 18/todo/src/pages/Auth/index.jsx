import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './login'
import Register from './register'
import ForgotPassword from './forgotPassword'

function Auth() {
  return (
    <>
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path='Forgot-Password' element={<ForgotPassword />} />
      <Route path='*' element={<h1>404 Page Not Found!</h1>} />
    </Routes>
    </>
  )
}

export default Auth