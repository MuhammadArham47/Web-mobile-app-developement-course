import { Row, Col, Typography, Button } from 'antd'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/Auth';

const { Title, Text } = Typography;

function Hero() {

    const { logout } = useAuth();

    const [active, setActive] = useState("home");

    const navigate = useNavigate();

    return (
        <>
            <div className="d-flex vh-100" style={{ overflow: "hidden" }}>
                <div className="text-white p-3"
                    style={{
                        width: "250px",
                        background: "linear-gradient(180deg, #111827, #0f172a)",
                    }} >
                    <h4 className="fw-bold mb-4">⚡ Admin Panel</h4>
                    <div className="d-flex flex-column gap-2">
                        {[
                            { key: "home", label: "🏠 Overview" },
                            { key: "users", label: "👤 Users" },
                            { key: "auth", label: "🔐 Auth Status" },
                            { key: "settings", label: "⚙️ Settings" },
                            { key: "Home", label: "🏠 Home", onclick: () => navigate("/") },
                            { key: "logout", label: "🚪 Logout", onclick: () => logout() },
                        ].map((item) => (
                            <button
                                key={item.key}
                                onClick={() => {
                                    if (item.onclick) {
                                        item.onclick();
                                    } else {
                                        setActive(item.key);
                                    }
                                }}
                                className="btn text-start text-white"
                                style={{
                                    background: active === item.key ? "#2563eb" : "transparent",
                                    borderRadius: "10px",
                                    padding: "10px"
                                }}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                </div>

                {/* RIGHT CONTENT AREA */}
                <div className="flex-grow-1 bg-light p-4" style={{ overflow: "hidden" }}>

                    {/* TOP BAR */}
                    <div className="p-3 rounded-4 text-white mb-4"
                        style={{
                            background: "linear-gradient(135deg, #1f2937, #111827)"
                        }}
                    >
                        <h4 className="mb-0">Dashboard Overview</h4>
                    </div>

                    {/* CONTENT */}
                    {active === "home" && (
                        <div className="row g-3">

                            {[
                                { icon: "🔐", title: "Auth", desc: "Firebase Active" },
                                { icon: "👤", title: "User", desc: "Logged In" },
                                { icon: "⚡", title: "System", desc: "Running Smooth" },
                                { icon: "🛡️", title: "Security", desc: "Protected" },
                                { icon: "📡", title: "Realtime", desc: "Listening ON" },
                                { icon: "🚀", title: "Performance", desc: "Optimized" },
                            ].map((item, i) => (
                                <div className="col-md-4" key={i}>
                                    <div className="p-4 bg-white shadow-sm rounded-4 h-100">
                                        <div style={{ fontSize: "28px" }}>{item.icon}</div>
                                        <h6 className="fw-bold mt-2">{item.title}</h6>
                                        <p className="text-muted mb-0">{item.desc}</p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    )}

                    {/* USERS TAB */}
                    {active === "users" && (
                        <div className="p-4 bg-white rounded-4 shadow-sm">
                            <h5 className="fw-bold">👤 Users Module</h5>
                            <p className="text-muted">
                                Here you can manage registered Firebase users.
                            </p>
                        </div>
                    )}

                    {/* AUTH TAB */}
                    {active === "auth" && (
                        <div className="p-4 bg-white rounded-4 shadow-sm">
                            <h5 className="fw-bold">🔐 Authentication Status</h5>
                            <p className="text-muted">
                                Firebase Auth is active and listening to user state changes.
                            </p>
                        </div>
                    )}

                    {/* SETTINGS TAB */}
                    {active === "settings" && (
                        <div className="p-4 bg-white rounded-4 shadow-sm">
                            <h5 className="fw-bold">⚙️ Settings</h5>
                            <p className="text-muted">
                                Configure app preferences and Firebase settings.
                            </p>
                        </div>
                    )}

                </div>

            </div>
        </>
    )
}

export default Hero