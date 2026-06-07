import React, { useState } from 'react'
import { Row, Col, Form, Input, Typography, Button } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/Auth';
import { auth } from '../../config/firebase';
import { sendPasswordResetEmail } from 'firebase/auth';

const { Title, Text } = Typography;
const { Item } = Form;

const initialState = { email: '' };

function ForgotPassword() {

  const { dispatch } = useAuth();

  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmitt = () => {
    let { email } = formData;

    if (!email) {
      return window.toastify("Email is required", "error");
    }

    if (!window.isValidEmail(email)) {
      return window.toastify("Please enter a valid email address", "error");
    };

    setIsLoading(true);

    const actionCodeSettings = {
    // Jab user email ke link par password save karega, to Continue dabane par is URL par aayega
    url: "http://localhost:5173/auth/login", 
    handleCodeInApp: true,
  };

    sendPasswordResetEmail(auth, email, actionCodeSettings)
      .then(() => {
        setIsLoading(false);
        window.toastify("Password reset email sent successfully", "success");
        navigate("/auth/login");
      })
      .catch((error) => {
        setIsLoading(false);
        const errorCode = error.code
        console.error("Error sending password reset email:", error);

        if (errorCode === "auth/user-not-found") {
          window.toastify("This email is not registered!", "error");
        } else if (errorCode === "auth/invalid-email") {
          window.toastify("Invalid email format!", "error");
        } else {
          window.toastify("Something went wrong. Try again!", "error");
        }

      });

  };

  return (
    <div className='auth p-3 d-flex justify-content-center align-items-center'>
      <div className="card w-100 p-3 p-mb-3 bg-white">
        <Title level={1} className='text-center mb-4'>Forgot Password</Title>
        <Form layout='vertical'>
          <Row>
            <Col span={24}>
              <Item label='Email' required>
                <Input type="email" size='large' placeholder='Enter your email' name='email' onChange={handleChange} />
              </Item>
            </Col>
            <Col span={24}>
              <Item className='mb-0'>
                <Button type='primary' size='large' block htmlType='submit' className='mt-3' loading={isLoading} onClick={handleSubmitt} >Send</Button>
              </Item>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  )
}

export default ForgotPassword