import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Frontend from "./index";
import Auth from '../Auth/Auth';

function IndexRoutes() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path='/*' element={<Frontend />} />
          <Route path='/auth/*' element={<Auth />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default IndexRoutes