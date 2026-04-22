import React from 'react'
import  { Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import PageNotFound from "../../components/PageNotFound";
import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Index";
import About from './About/About';
import Contact from './Contact/Contact';


function Index() {
  return (
    <>
      <Header />
      <main>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={ <Contact /> } />
          <Route path='*' element={<PageNotFound />} />
      </Routes>
      </main>
      <Footer />
    </>
  )
}

export default Index