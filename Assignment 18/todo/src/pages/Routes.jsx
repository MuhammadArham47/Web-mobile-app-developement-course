import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Frontend from './Frontend'
import Dashboard from './Dashboard'
import Auth from './Auth'
import { useAuth } from '../context/Auth'

function Index() {

  const { isAuth } = useAuth();

  return (
    <>
    <Routes>
        <Route path='/*' element={<Frontend />} />
        <Route path='/auth/*' element={<Auth />} />
        <Route path='/dashboard' element={ isAuth ? <Dashboard />: <Navigate to="/auth/login" replace />} />
    </Routes>
    </>
  )
}

export default Index