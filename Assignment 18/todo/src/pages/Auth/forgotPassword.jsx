import React, { useState } from 'react'
import { Row, Col, Form, Input, Typography, Button } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/Auth';

const { Title, Text } = Typography;
const { Item } = Form;

const initialState = { email: '', password: '' };

function ForgotPassword() {

  const { dispatch } = useAuth();

  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmitt = () => {
    let { email, password } = formData;

    if (!email) {
      return window.toastify("Email is required", "error");
    }

    if (!window.isValidEmail(email)) {
      return window.toastify("Please enter a valid email address", "error");
    };

    setIsLoading(true);

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(u => u.email === email);

    setTimeout(() => {
      setIsLoading(false);

      if (!user) {
        setIsLoading(false);
        return window.toastify("Invalid email", "error");
      }

      if (!isPasswordVisible) {
        setIsPasswordVisible(true);
        window.toastify("Email verified. Please enter your new password.", "success");
        return;
      }

      if (!password) {
        return window.toastify("Password is required", "error");
      }

      user.password = password;

      localStorage.setItem("users", JSON.stringify(users));

      setTimeout(() => {
        window.toastify("Password reset successful", "success");
        navigate("/auth/login");
      }, 500);
    }, [500]);
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
            {isPasswordVisible &&
              <Col span={24}>
                <Item label='Password' required>
                  <Input.Password size='large' placeholder='Enter your password' name='password' onChange={handleChange} />
                </Item>
              </Col>}
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