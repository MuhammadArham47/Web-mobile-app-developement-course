import React from "react";
import { Col, Row, Typography } from "antd";
const { Title, Paragraph, Text } = Typography;

function Services() {
  return (
    <div className="container">
      <Row>
        <Col span={24}>
          <Title level={1}>Service Section</Title>
          <Title level={2}>Service Section</Title>
          <Title level={3}>Service Section</Title>
          <Title level={4}>Service Section</Title>
          <Title level={5}>Service Section</Title>
          <Paragraph>Service Section</Paragraph>
          <Text>Service Section</Text>
        </Col>
      </Row>
    </div>
  );
}

export default Services;
