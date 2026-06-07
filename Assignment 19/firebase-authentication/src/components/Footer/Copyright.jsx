import { Col, Row, Typography } from 'antd'
import React from 'react'

const { Paragraph } = Typography

function Copyright() {

    const year = new Date().getFullYear();

    return (
        <footer className='bg-primary py-2'>
            <div className='container'>
                <Row>
                    <Col span={24}>
                        <Paragraph className='text-white mb-0 text-center'>&copy; {year}. All Rights Reserved.</Paragraph>
                    </Col>
                </Row>
            </div>
        </footer>
    )
}

export default Copyright