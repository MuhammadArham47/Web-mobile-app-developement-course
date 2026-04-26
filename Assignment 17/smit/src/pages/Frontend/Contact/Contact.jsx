import React from 'react'
import { Typography } from 'antd'

const { Title } = Typography;

function Contact() {
  return (
    <div className='container mt-5'>
        <div className="container py-5 mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-9">
          
          {/* Header Section */}
          <div className="text-center mb-5">
            <h1 className="fw-bold display-6">Contact Us</h1>
            <p className="text-secondary">Koi sawal ya feedback? Neeche diye gaye form ke zariye humse rabta karein.</p>
            <hr className="w-25 mx-auto text-primary" style={{ height: '3px' }} />
          </div>

          <div className="row g-5">
            {/* Left: Contact Details */}
            <div className="col-md-4">
              <div className="mb-4">
                <h6 className="text-uppercase fw-bold text-primary small">Address</h6>
                <p className="text-muted">Faisalabad, Punjab, Pakistan</p>
              </div>
              <div className="mb-4">
                <h6 className="text-uppercase fw-bold text-primary small">Email</h6>
                <p className="text-muted">info@studentportal.com</p>
              </div>
              <div className="mb-4">
                <h6 className="text-uppercase fw-bold text-primary small">Phone</h6>
                <p className="text-muted">+92 300 1234567</p>
              </div>
            </div>

            {/* Right: Simple Form */}
            <div className="col-md-8">
              <div className="p-4 border rounded-3 bg-white shadow-sm">
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-semibold small">First Name</label>
                      <input type="text" className="form-control" placeholder="Enter first name" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-semibold small">Last Name</label>
                      <input type="text" className="form-control" placeholder="Enter last name" />
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <label className="form-label fw-semibold small">Email Address</label>
                    <input type="email" className="form-control" placeholder="name@example.com" />
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-semibold small">How can we help?</label>
                    <textarea className="form-control" rows="5" placeholder="Apna message yahan likhein..."></textarea>
                  </div>

                  {/* Standard Bootstrap Button */}
                  <button type="submit" className="btn btn-primary w-100 py-2 fw-bold">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact