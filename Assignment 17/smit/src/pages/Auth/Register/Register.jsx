import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Typography } from "antd";

const { Title } = Typography;

function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmitt = (e) => {
    const {name, value} = e.target;
    setForm({
      ...form, [name]: value
    });
  };

  const finalSubmitt = ()=> {

    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      return alert("All fields are required");
    }
    if (form.password !== form.confirmPassword) {
      return alert("Password and confirm password should be same");
    }
    localStorage.setItem("user", JSON.stringify(form));
    alert("Registration Successfull");
    setForm({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    navigate("/auth/login");
  };

  return (
    <div id="auth" className="px-3">
      <div className="Login-design bg-white p-3 text-center">
        <Title level={1}>Register Form</Title>
        <Form layout="vertical" onFinish={finalSubmitt}>
          <Form.Item label="Name" required>
            <Input name="name" onChange={handleSubmitt} placeholder="Enter your name" size="large" />
          </Form.Item>
          <Form.Item label="Email" required>
            <Input name="email" onChange={handleSubmitt} type="email" placeholder="Enter your email" size="large" />
          </Form.Item>
          <Form.Item label="Password" required>
            <Input.Password name="password" onChange={handleSubmitt} placeholder="Enter your password" size="large" />
          </Form.Item>
          <Form.Item label="Confirm Password" required>
            <Input.Password name="confirmPassword" onChange={handleSubmitt} placeholder="Enter your Confirm password" size="large" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" size="large" block htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div> 
  );
}

export default Register;
