import React from 'react'
import { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import { Button, Form, Input, Typography } from 'antd'

const { Title } = Typography

function Login() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmitt = (e) => {
    const {name, value} = e.target;
    setForm({
      ...form, [name]: value
    });
  };

  const finalSubmitt = ()=> {

    if (!form.email || !form.password) {
      return alert("All fields are required");
    }
    if (localStorage.getItem("user")) {
      const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      return alert("User not found please signup first");
    }
    if (user.email === form.email && user.password === form.password) {
      alert("Login Successfull");
      navigate("/", {state: {user: user}});
    } else {
      return alert("Invalid email or password");
    }
    } else {
      const existUser = JSON.parse(localStorage.getItem("existUser"));
    if (!existUser) {
      return alert("User not found please signup first");
    }
    if (existUser.email === form.email && existUser.password === form.password) {
      alert("Login Successfull");
      navigate("/", {state: {user: existUser}});
    } else {
      return alert("Invalid email or password");
    }
    }
  };

  return (
    <div id='auth' className='px-3'>
        <div className="Login-design bg-white p-3 text-center">
            <Title level={1}>Login Form</Title>
            <Form layout='vertical' onFinish={finalSubmitt}>
                <Form.Item label="Email" required>
                    <Input name='email' onChange={handleSubmitt} type='email' placeholder='Enter your email' size='large' />
                </Form.Item>
                <Form.Item label="Password" required>
                    <Input.Password name='password' onChange={handleSubmitt} placeholder='Enter your password' size='large' />
                </Form.Item>
                <Form.Item>
                    <Button type='primary' size='large' block htmlType='submit'>Login</Button>
                </Form.Item>
            </Form>
        </div>
    </div>
  )
}

export default Login