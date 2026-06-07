import React from 'react'
import { Col, Row, Typography } from 'antd'

const { Title } = Typography;

function Hero() {
  return (
    // <div className='container py-5'>
    //     <Title level={1} className='text-center'>About Page</Title>
    //     <Row className='mt-3'>
    //         <Col span={12} offset={6} className='text-center'>
    //             <Title level={3}>Welcome to the About Page</Title>
    //         </Col>
    //     </Row>
    // </div>
    <>

    <div className="container py-5">

  <div className="text-center mb-5">
    <h2 className="fw-bold display-6">
      About This Authentication System ⚛️
    </h2>

    <p className="text-muted fs-5">
      This project demonstrates a production-level authentication flow using Firebase.
      Designed for scalability, security, and real-world React applications.
    </p>
  </div>

  <div className="row g-4">

    {[
      {
        title: "🔐 Secure Authentication Layer",
        desc: "Handles login, signup, logout and persistent sessions using Firebase Auth state listener."
      },
      {
        title: "⚛️ React Architecture",
        desc: "Clean component structure with context API for global authentication state management."
      },
      {
        title: "🛡️ Protected Routing System",
        desc: "Routes are secured using conditional rendering and redirect logic based on auth state."
      },
      {
        title: "⚡ Real-time State Sync",
        desc: "Instant UI updates on login/logout without page reload using onAuthStateChanged listener."
      },
      {
        title: "🔥 Firebase Backend",
        desc: "Serverless authentication backend with Google-grade security and scalability."
      },
      {
        title: "🚀 Production Ready Flow",
        desc: "Designed like a real SaaS app with clean UX, smooth navigation and user session control."
      },
    ].map((item, i) => (
      <div className="col-md-4" key={i}>
        <div
          className="p-4 rounded-4 shadow-sm h-100"
          style={{
            background: "rgba(255,255,255,0.8)",
            backdropFilter: "blur(10px)",
            border: "1px solid #e5e7eb",
            transition: "0.3s"
          }}
        >
          <h5 className="fw-bold">{item.title}</h5>
          <p className="text-muted mt-2">{item.desc}</p>
        </div>
      </div>
    ))}

  </div>

</div>
    </>
  )
}

export default Hero