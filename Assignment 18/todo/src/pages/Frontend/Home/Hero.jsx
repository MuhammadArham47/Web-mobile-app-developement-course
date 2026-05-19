import { Col, Row, Typography } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../context/Auth'

const { Title } = Typography

function Hero() {

    const { isAuth } = useAuth();

    const user = JSON.parse(localStorage.getItem("user"));
    const todos = JSON.parse(localStorage.getItem("todos") || "[]");
    const visibleTodos = todos.filter(todo => todo.user_id === user.id);

    const navigate = useNavigate();

    const [pendingCount, setPendingCount] = useState(0);


    return (
        <>
           { isAuth ? (
            <section className="py-5 bg-light min-vh-100 d-flex align-items-center custom-sections">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-12 col-md-8 col-lg-6">

                            {/* Badge */}
                            <span className="badge rounded-pill fs-6 bg-success bg-opacity-10 text-success px-3 py-2 mb-4 fw-semibold">
                                ✨ Welcome Back, {user.fullName}!
                            </span>

                            {/* Heading */}
                            <h1 className="display-4 fw-extrabold text-dark mb-3">
                                Ready to Crush Your <br />
                                <span className="text-primary">Daily Tasks?</span>
                            </h1>

                            {/* Dynamic Status Paragraph */}
                            <p className="lead text-secondary mb-5">
                                You currently have <strong className="text-danger fs-4 border-bottom border-danger border-3">{visibleTodos.length}</strong> pending tasks awaiting your attention. Take control of your workflow by reviewing your current priorities, tracking your academic projects, and organizing your daily roadmap for maximum productivity.
                            </p>

                            {/* Action Cards Grid */}
                            <div className="row g-3 justify-content-center mb-5">
                                <div className="col-6" onClick={() => navigate('/todos')}>
                                    <div
                                        className="card border-0 shadow-sm p-4 h-100 bg-white rounded-4 btn text-start border-top border-primary border-4"
                                        style={{ transition: 'transform 0.2s' }}
                                    >
                                        <i className="fa-solid fa-list-check fs-3 text-primary mb-3"></i>
                                        <h5 className="fw-bold m-0">Open Todo List</h5>
                                        <small className="text-muted">Manage & edit tasks</small>
                                    </div>
                                </div>

                                <div className="col-6" onClick={() => navigate('/dashboard')}>
                                    <div
                                        className="card border-0 shadow-sm p-4 h-100 bg-white rounded-4 btn text-start border-top border-success border-4"
                                    >
                                        <i className="fa-solid fa-circle-plus fs-3 text-success mb-3"></i>
                                        <h5 className="fw-bold m-0">Create New</h5>
                                        <small className="text-muted">Add a quick assignment</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
           ) : (
            <section className="py-5 bg-light d-flex min-vh-100 align-items-center custom-section">
                <div className="container">
                    <div className="row align-items-center g-5">

                        {/* Left Column: Text & CTA Content */}
                        <div className="col-12 col-lg-6 text-center text-lg-start">
                            <span className="badge rounded-pill bg-primary bg-opacity-10 text-primary px-3 py-2 mb-3 fw-semibold">
                                🚀 Smart Task Management
                            </span>
                            <h1 className="display-4 fw-extrabold text-dark mb-3 lh-sm">
                                Organize Your Day, <br />
                                <span className="text-primary">Achieve Your Goals</span>
                            </h1>
                            <p className="lead text-secondary mb-4">
                                Effortlessly manage your daily tasks with a simple, secure, and private todo application. Keep seamless track of your assignments and projects with complete peace of mind.
                            </p>

                            {/* Action Buttons */}
                            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start mb-5">
                                <button
                                    onClick={() => navigate('/auth/login')}
                                    className="btn btn-primary btn-lg rounded-pill px-4 py-3 fw-bold shadow-sm custom-btn"
                                >
                                    Get Started Free <i className="fa-solid fa-arrow-right ms-2"></i>
                                </button>
                                <button
                                    onClick={() => navigate('/auth/register')}
                                    className="btn btn-outline-secondary btn-lg rounded-pill px-4 py-3 fw-semibold"
                                >
                                    Create Account
                                </button>
                            </div>

                            {/* Quick Micro Features */}
                            <div className="row g-3 pt-3 border-top border-2 border-light justify-content-center justify-content-lg-start">
                                <div className="col-auto d-flex align-items-center gap-2">
                                    <i className="fa-solid fa-circle-check text-success fs-5"></i>
                                    <span className="text-secondary small fw-medium">100% Private</span>
                                </div>
                                <div className="col-auto d-flex align-items-center gap-2">
                                    <i className="fa-solid fa-circle-check text-success fs-5"></i>
                                    <span className="text-secondary small fw-medium">Unlimited Tasks</span>
                                </div>
                                <div className="col-auto d-flex align-items-center gap-2">
                                    <i className="fa-solid fa-circle-check text-success fs-5"></i>
                                    <span className="text-secondary small fw-medium">24/7 Support</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Visual Mockup (Todo Preview Box) */}
                        <div className="col-12 col-lg-6">
                            <div className="position-relative p-2">
                                {/* Background Decorative Blob */}
                                <div
                                    className="position-absolute bg-primary opacity-10 rounded-circle top-50 start-50 translate-middle"
                                    style={{ width: "110%", height: "110%", filter: "blur(50px)", zIndex: 0 }}
                                ></div>

                                {/* Fake Interactive Todo Card UI */}
                                <div
                                    className="card border-0 shadow-lg p-4 bg-white position-relative"
                                    style={{ borderRadius: "32px", zIndex: 1 }}
                                >
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <h5 className="fw-bold text-dark m-0">✨ My Dashboard</h5>
                                        <span className="badge bg-dark rounded-pill px-2 py-1">3 Pending</span>
                                    </div>

                                    {/* Sample Todo Item 1 */}
                                    <div className="d-flex align-items-center justify-content-between p-3 mb-3 bg-light rounded-4 border-start border-danger border-4">
                                        <div>
                                            <h6 className="fw-bold text-dark m-0 mb-1">React Assignment</h6>
                                            <small className="text-muted">Due: Today</small>
                                        </div>
                                        <span className="badge bg-danger bg-opacity-10 text-danger rounded-pill px-3 py-2 small fw-bold">High</span>
                                    </div>

                                    {/* Sample Todo Item 2 */}
                                    <div className="d-flex align-items-center justify-content-between p-3 mb-3 bg-light rounded-4 border-start border-warning border-4">
                                        <div>
                                            <h6 className="fw-bold text-dark m-0 mb-1">Complete Task</h6>
                                            <small className="text-muted">Due: Tomorrow</small>
                                        </div>
                                        <span className="badge bg-warning bg-opacity-10 text-warning text-dark rounded-pill px-3 py-2 small fw-bold">Medium</span>
                                    </div>

                                    {/* Sample Todo Item 3 (Completed Strike-through Style) */}
                                    <div className="d-flex align-items-center justify-content-between p-3 bg-light rounded-4 opacity-50 border-start border-success border-4">
                                        <div>
                                            <h6 className="fw-bold text-dark text-decoration-line-through m-0 mb-1">Complete MERN Stack</h6>
                                            <small className="text-muted">Completed</small>
                                        </div>
                                        <span className="badge bg-success bg-opacity-10 text-success rounded-pill px-3 py-2 small fw-bold">Low</span>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
           ) }
        </>
    )
}

export default Hero