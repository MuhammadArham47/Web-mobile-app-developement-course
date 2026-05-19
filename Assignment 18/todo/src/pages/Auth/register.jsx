import React, { useState } from 'react'
import { Row, Col, Form, Input, Typography, Button } from 'antd'
import { Link, useNavigate } from 'react-router-dom'

const { Title, Text } = Typography;
const { Item } = Form;

const initialState = { fullName: '', email: '', password: '', confirmPassword: '' };

function Register() {

    const navigate = useNavigate();
    const [formData, setFormData] = useState(initialState);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmitt = () => {
        let { fullName, email, password, confirmPassword } = formData;
        fullName = fullName.trim();

        if (!fullName || !email || !password || !confirmPassword) {
            return window.toastify("All fields are required", "error");
        }

        if (fullName.length < 3) {
            return window.toastify("Full name must be at least 3 characters long", "error");
        }
        if (!window.isValidEmail(email)) {
            return window.toastify("Please enter a valid email address", "error");
        }
        if (password.length < 6) {
            return window.toastify("Password must be at least 6 characters long", "error");
        }
        if (password !== confirmPassword) {
            return window.toastify("Passwords do not match", "error");
        }

        const user = {
            fullName, email, password,
            id: window.getRandomId(),
            createdAt: Date.now(),
            status: "active",
            role: "student"
        };

        console.log('user', user);

        setLoading(true);

        const users = JSON.parse(localStorage.getItem("users") || "[]");
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));

        setTimeout(() => {
            setLoading(false);
        }, 1000);

        setTimeout(() => {
            window.toastify("Registration successful", "success");
            setFormData(initialState);
            navigate("/auth/login");
        }, 1500);
    }

    return (
        <div className='auth p-3 d-flex justify-content-center align-items-center'>
            <div className="card w-100 p-3 p-mb-3 bg-white">
                <Title level={1} className='text-center mb-4'>Register</Title>
                <Form layout='vertical'>
                    <Row>
                        <Col span={24}>
                            <Item label='Full Name' required>
                                <Input type="text" size='large' placeholder='Enter your full name' name='fullName' onChange={handleChange} />
                            </Item>
                        </Col>
                        <Col span={24}>
                            <Item label='Email' required>
                                <Input type="email" size='large' placeholder='Enter your email' name='email' onChange={handleChange} />
                            </Item>
                        </Col>
                        <Col span={24}>
                            <Item label='Password' required>
                                <Input.Password size='large' placeholder='Enter your password' name='password' onChange={handleChange} />
                            </Item>
                        </Col>
                        <Col span={24}>
                            <Item label='Confirm Password' required>
                                <Input.Password size='large' placeholder='Confirm your password' name='confirmPassword' onChange={handleChange} />
                            </Item>
                        </Col>
                        <Col span={24} className='text-end'>
                            <Text className=''>Already have an account? <Link to="/auth/login">Login</Link></Text>
                        </Col>
                        <Col span={24}>
                            <Item className='mb-0'>
                                <Button type='primary' size='large' block htmlType='submit' loading={loading} onClick={handleSubmitt} className='mt-3' >Register</Button>
                            </Item>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>
    )
}

export default Register