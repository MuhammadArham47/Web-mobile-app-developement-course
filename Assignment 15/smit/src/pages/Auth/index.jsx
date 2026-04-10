import React from 'react'
import {Routes, Route} from "react-router-dom"
import PageNotFound from "../../components/PageNotFound";
import Login from "./login";
import Register from "./Register";

function Auth() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default Auth