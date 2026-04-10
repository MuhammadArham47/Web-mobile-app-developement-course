import React from "react";
import { Col, Row, Typography } from "antd";
import { Link } from "react-router-dom";

const { Title, Paragraph, Text } = Typography;

function Hero() {
  return (
    <div className="container">
      <Row>
        <Col span={24}>
          <Title>About</Title>
          <Paragraph>About Section</Paragraph>
          <Text>About Section</Text>
          <br />
          <Link to="/contact" className="btn btn-info">
            Contact
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default Hero;
