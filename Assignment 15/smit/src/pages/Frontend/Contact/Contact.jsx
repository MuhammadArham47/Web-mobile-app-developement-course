import React from "react";
import { Col, Row, Typography } from "antd";
import { Link } from "react-router-dom";
const { Title, Paragraph, Text } = Typography;

function Hero() {
  return (
    <div className="container">
      <Row>
        <Col span={24}>
          <Title level={1}>Contact</Title>
          <Paragraph>Contact Section</Paragraph>
          <Text>Contact Section</Text>
          <br />
          <Link to="/" className="btn btn-info">Home</Link>
        </Col>
      </Row>
    </div>
  );
}

export default Hero;
