import React from "react";
import { Col, Row, Typography } from "antd";
const { Title } = Typography;

function Register() {
  return (
    <main className="py-5">
      <div className="container">
        <Row>
          <Col span={24}>
            <Title level={1} className="text-center">
              Register
            </Title>
          </Col>
        </Row>
      </div>
    </main>
  );
}

export default Register;
