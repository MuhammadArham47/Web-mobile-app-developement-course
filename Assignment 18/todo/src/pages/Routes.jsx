import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Frontend from './Frontend'
import Dashboard from './Dashboard'
import Auth from './Auth'

function Index() {
  return (
    <>
    <Routes>
        <Route path='/*' element={<Frontend />} />
        <Route path='/auth/*' element={<Auth />} />
        <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
    </>
  )
}

export default Index