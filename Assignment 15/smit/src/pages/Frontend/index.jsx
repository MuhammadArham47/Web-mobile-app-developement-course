import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import PageNotFound from "../../components/PageNotFound";
import Home from "./Home/index";
import About from "./About/index";
import Contact from "./Contact/index";

function Frontend() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default Frontend;
