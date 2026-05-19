import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './Home'
import Todos from './Todos'
import { useAuth } from '../../context/Auth'

function Frontend() {

  const { isAuth } = useAuth();

  return (
    <>
    <Header />
       <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/todos' element={ isAuth ? <Todos /> : <Navigate to="/auth/login" replace />} />
            <Route path='*' element={<h1>404 Page Not Found!</h1>} />
       </Routes>
    <Footer />
    </>
  )
}

export default Frontend