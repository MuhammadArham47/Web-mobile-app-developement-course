import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React, { useEffect, useState } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './Home'
import About from './About'

function Frontend() {

  return (
    <>
    <Header />
       <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={ <About />} />
            <Route path='*' element={<h1>404 Page Not Found!</h1>} />
       </Routes>
    <Footer />
    </>
  )
}

export default Frontend