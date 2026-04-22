import React from "react";
import { Button, Typography } from "antd";
import Buttons from "../../../utils/Button";

const { Title, Paragraph } = Typography;

function Home() {
  return <div className="container mt-5">
    <Title level={1}>Home Page</Title>
    <Paragraph>Buttons From Antd Design Large</Paragraph>
    <div className="d-flex flex-wrap gap-3">
      <Buttons type="primary" value="Large antd button" size="large" />
      <Buttons type="default" value="Large antd button" size="large" />
      <Buttons type="primary" value="Large antd button" size="large" />
      <Buttons type="default" value="Large antd button" size="large" />
      <Buttons type="primary" value="Large antd button" size="large" />
      <Buttons type="default" value="Large antd button" size="large" />
      <Buttons type="primary" value="Large antd button" size="large" />
      <Buttons type="default" value="Large antd button" size="large" />
      <Buttons type="primary" value="Large antd button" size="large" />
      <Buttons type="default" value="Large antd button" size="large" />
      <Buttons type="primary" value="Large antd button" size="large" />
      <Buttons type="default" value="Large antd button" size="large" />
    </div>
    <Paragraph className="mt-5">Buttons Antd Design Medium</Paragraph>
    <div className="d-flex flex-wrap mt-2 gap-3">
      <Buttons type="primary" value="Large antd button" size="medium" />
      <Buttons type="default" value="Large antd button" size="medium" />
      <Buttons type="primary" value="Large antd button" size="medium" />
      <Buttons type="default" value="Large antd button" size="medium" />
      <Buttons type="primary" value="Large antd button" size="medium" />
      <Buttons type="default" value="Large antd button" size="medium" />
      <Buttons type="primary" value="Large antd button" size="medium" />
      <Buttons type="default" value="Large antd button" size="medium" />
      <Buttons type="primary" value="Large antd button" size="medium" />
      <Buttons type="default" value="Large antd button" size="medium" />
      <Buttons type="primary" value="Large antd button" size="medium" />
      <Buttons type="default" value="Large antd button" size="medium" />
    </div>
    <Paragraph className="mt-5">Buttons Antd Design Small</Paragraph>
    <div className="d-flex flex-wrap mt-2 gap-3">
      <Buttons type="primary" value="Large antd button" size="small" />
      <Buttons type="default" value="Large antd button" size="small" />
      <Buttons type="primary" value="Large antd button" size="small" />
      <Buttons type="default" value="Large antd button" size="small" />
      <Buttons type="primary" value="Large antd button" size="small" />
      <Buttons type="default" value="Large antd button" size="small" />
      <Buttons type="primary" value="Large antd button" size="small" />
      <Buttons type="default" value="Large antd button" size="small" />
      <Buttons type="primary" value="Large antd button" size="small" />
      <Buttons type="default" value="Large antd button" size="small" />
      <Buttons type="primary" value="Large antd button" size="small" />
      <Buttons type="default" value="Large antd button" size="small" />
    </div>
  </div>;
}

export default Home;
