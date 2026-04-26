import React from 'react'
import { Typography, Row, Col } from 'antd'

const { Paragraph } = Typography;

function Footer() {

    const year = new Date().getFullYear();

  return (
    <footer className='bg-primary text-center py-3'>
        <div className="container">
            <Row>
                <Col span={24}>
                    <Paragraph style={{color: "white", marginBottom: "0"}}>&copy; {year}. All Rights Reserved</Paragraph>
                </Col>
            </Row>
        </div>
    </footer>
  )
}

export default Footer