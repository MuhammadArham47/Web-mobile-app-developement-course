import { Col, Row, Typography } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../context/Auth'

const { Title } = Typography

function Hero() {

    return (
        <>
            <div className="container mt-4">
                <div className="p-5 rounded-5 text-white shadow-lg mb-5"
                    style={{
                        background: "linear-gradient(135deg, #0f172a, #1e3a8a, #2563eb)"
                    }}
                >
                    <h1 className="fw-bold display-4">
                        Firebase Authentication System 🔐
                    </h1>

                    <p className="fs-5 mt-3 opacity-75">
                        A production-ready authentication system built with React & Firebase.
                        Secure login, signup, protected routes and real-time session management
                        with persistent user authentication across refresh.
                    </p>

                    <div className="mt-4 d-flex gap-3 flex-wrap">
                        <button className="btn btn-light fw-semibold px-4">
                            🚀 Get Started
                        </button>
                        <button className="btn btn-outline-light px-4">
                            📘 Learn Docs
                        </button>
                    </div>
                </div>

                {/* FEATURES SECTION */}
                <div className="mb-3">
                    <h3 className="fw-bold mb-4">✨ Core Features</h3>

                    <div className="row g-4">
                        {[
                            "Secure Firebase Authentication",
                            "Protected Routes System",
                            "Real-time Auth Listener",
                        ].map((item, i) => (
                            <div className="col-md-4" key={i}>
                                <div className="p-4 bg-white shadow-sm rounded-4 h-100">
                                    <h6 className="fw-bold">✔ {item}</h6>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* HOW IT WORKS */}
                <div className="p-5 rounded-4 bg-light shadow-sm">
                    <h3 className="fw-bold mb-3">⚙️ How It Works</h3>

                    <p className="text-muted">
                        1. User signs up or logs in using Firebase Authentication<br />
                        2. Firebase returns user session token<br />
                        3. React listens using <code>onAuthStateChanged()</code><br />
                        4. Global context updates authentication state<br />
                        5. Protected routes allow or block access instantly
                    </p>
                </div>
            </div>
        </>
    )
}

export default Hero