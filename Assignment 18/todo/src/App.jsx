import React from 'react'
import './App.scss';
import './config/global'
import "bootstrap/dist/js/bootstrap.bundle";
import { ConfigProvider } from 'antd';
import Index from './pages/Routes';

function App() {
  return (
    <>
      <ConfigProvider theme={{ token: { colorPrimary: "#1d3557" }, components: { Button: { controlOutline: 0, primaryShadow: "none" } } }}> 
        <Index />
      </ConfigProvider>
    </>
  )
}

export default App