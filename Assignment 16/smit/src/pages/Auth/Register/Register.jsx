import React from "react";
import { Button, Form, Input, Typography } from "antd";

const { Title } = Typography;

function Register() {
  return (
    <div id="auth" className="px-3">
      <div className="Login-design bg-white p-3 text-center">
        <Title level={1}>Register Form</Title>
        <Form layout="vertical">
          <Form.Item label="Name" required>
            <Input placeholder="Enter your name" size="large" />
          </Form.Item>
          <Form.Item label="Email" required>
            <Input type="email" placeholder="Enter your email" size="large" />
          </Form.Item>
          <Form.Item label="Password" required>
            <Input.Password placeholder="Enter your password" size="large" />
          </Form.Item>
          <Form.Item label="Confirm Password" required>
            <Input.Password placeholder="Enter your Confirm password" size="large" />
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
