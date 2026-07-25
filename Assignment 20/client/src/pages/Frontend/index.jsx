import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../../components/Header/Index'
import Footer from '../../components/Footer/Index'
import Home from './Home/Index'
import Features from './Features/Index'
import Pricing from './Pricing/Index'
import Resource from './Resources/Index'
import PageNotFound from '../../components/PageNotFound'

function Frontend() {
    return (
        <>
            <Routes>
                <Route path='/' element={<><Header /><Home /><Footer /></>} />
                <Route path='/feature' element={<><Header /><Features /><Footer /></>} />
                <Route path='/pricing' element={<><Header /><Pricing /><Footer /></>} />
                <Route path='/resource' element={<><Header /><Resource /><Footer /></>} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </>
    )
}

export default Frontend