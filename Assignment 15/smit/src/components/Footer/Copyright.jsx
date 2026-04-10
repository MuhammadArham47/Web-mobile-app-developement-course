import React from "react";
import { Col, Row, Typography } from "antd";
const { Paragraph } = Typography;

function Copyright() {
    const year = new Date().getFullYear();
  return (
    <footer className="bg-primary text-white text-center py-3">
      <div className="container">
        <Row>
          <Col span={24}>
            <Paragraph style={{marginBottom: 0, color: "white"}}>&copy; {year}. All rights reserved.</Paragraph>
          </Col>
        </Row>
      </div>
    </footer>
  );
}

export default Copyright;
