import React from 'react'
import { Col, Row, Typography } from 'antd'
import { Link } from 'react-router-dom';

const { Title } = Typography;

function PageNotFound() {
  return (
    <main>
        <div className="container-fluid d-flex align-items-center min-vh-100 justify-content-center bg-light">
      <div className="text-center">
        {/* Animated 404 Text */}
        <div className="error-container">
          <h1 className="display-1 fw-bold custom-404">404</h1>
          <div className="error-shadow"></div>
        </div>

        <h2 className="fw-bold mt-4">Page Not Found</h2>
        <p className="text-muted mb-4">
          Please use a working path to access the page
        </p>

        {/* Action Buttons */}
        <div className="d-flex justify-content-center gap-3">
          <Link to="/" className="btn btn-primary px-4 py-2 rounded-pill shadow-sm custom-btn">
            Go Home
          </Link>
          <button 
            onClick={() => window.history.back()} 
            className="btn btn-outline-dark px-4 py-2 rounded-pill"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
    </main>
  )
}

export default PageNotFound