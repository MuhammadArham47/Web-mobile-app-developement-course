import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Frontend from './Frontend'
import PageNotFound from '../components/PageNotFound'
import Auth from './Auth/Index'
import Dashboard from './Dashboard/Index'
import { useAuth } from '../context/Auth'
import Loader from '../utils/loader'

function Routess() {

    const { isAuth, loading } = useAuth();

    if (loading) {
        return (
            <Loader />
        )
    };

    return (
        <>
            <Routes>
                <Route path='/*' element={isAuth ? <Navigate to="/dashboard" replace /> : <Frontend />} />
                <Route path='/auth/*' element={isAuth ? <Navigate to="/dashboard" replace /> : <Auth />} />
                <Route path='/dashboard' element={isAuth ? <Dashboard /> : <Navigate to="/auth/login" replace />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </>
    )
}

export default Routess