import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Todos from './Todos'

function Frontend() {
  return (
    <>
    <Header />
       <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/todos' element={<Todos />} />
            <Route path='*' element={<h1>404 Page Not Found!</h1>} />
       </Routes>
    <Footer />
    </>
  )
}

export default Frontend