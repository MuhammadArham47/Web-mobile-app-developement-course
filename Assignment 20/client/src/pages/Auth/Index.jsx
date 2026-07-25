import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './register'
import Login from './Login'
import PageNotFound from '../../components/PageNotFound'

function Auth() {
    return (
        <>
            <Routes>
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </>
    )
}

export default Auth