import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Frontend from './Frontend'
import Auth from './Auth';

function Index() {
  return (
    <Routes>
        <Route path='/*' element={<Frontend />} />
        <Route path='/auth/*' element={<Auth />} />
    </Routes>
  )
}

export default Index