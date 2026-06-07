import React, { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Frontend from './Frontend'
import Dashboard from './Dashboard'
import Auth from './Auth'
import { useAuth } from '../context/Auth'
import { auth } from '../config/firebase'
import { onAuthStateChanged } from 'firebase/auth'

function Index() {

  const { isAuth, loading } = useAuth();

  if (!loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading Session...</span>
        </div>
      </div>
    );
  };

  return (
    <>
    <Routes>
        <Route path='/*' element={<Frontend />} />
        <Route path='/auth/*' element={<Auth />} />
        <Route path='/dashboard' element={ isAuth ? <Dashboard /> : <Navigate to="/auth/login" replace />} />
    </Routes>
    </>
  )
}

export default Index