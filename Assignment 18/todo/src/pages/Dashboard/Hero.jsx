import React, { useState } from 'react'
import { Col, Row, Typography, Form, Input, Select, DatePicker, Button } from 'antd'
import dayjs from 'dayjs';

const { Title, Paragraph, Text } = Typography
const { Item } = Form

const initialState = {
    title: '',
    description: '',
    priority: undefined,
    status: undefined,
    category: undefined,
    created_at: '',
    user_id: ''
};

function Hero() {

    const [form, setForm] = useState(initialState);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSelectChange = (name, value) => {
        setForm({ ...form, [name]: value });
    };

    const dateChange = (date, dateString) => {
        setForm({ ...form, created_at: dateString });
    };

    const handleSubmitt = () => {

        let { title, description, priority, status, category, created_at, user_id } = form;

        title = title.trim();
        description = description.trim();

        if (!title || !description || !priority || !status || !category || !created_at) {
            return window.toastify("All fields are required", "error");
        }

        const user = JSON.parse(localStorage.getItem("user"));

        const todo = {
            id: window.getRandomId(),
            title,
            description,
            priority,
            status,
            category,
            created_at,
            user_id: user.id
        };

        setLoading(true);

        const todos = JSON.parse(localStorage.getItem("todos") || "[]");
        todos.push(todo);
        localStorage.setItem("todos", JSON.stringify(todos));

        setTimeout(() => {
            setLoading(false);
            window.toastify("Todo created successfully", "success");
            setForm(initialState);
        }, 1000);
    };

    return (
        <main>
            <div className="bg-light p-4 d-flex align-items-center justify-content-center py-5">
                <div className="card bg-white shadow-lg p-4">
                    <div className="mb-5">
                        <Title level={2} className='fw-bold'>Create New Todo</Title>
                        <Paragraph className="text-secondary mt-2 mb-0">
                            Organize your tasks professionally and stay productive.
                        </Paragraph>
                    </div>
                    <Form layout="vertical">
                        <Row>
                            <Col span={24}>
                                <Item label='Todo Title' required>
                                    <Input size='large' type="text" name='title' value={form.title} onChange={handleChange} placeholder='Enter todo title' />
                                </Item>
                            </Col>
                            <Col span={24}>
                                <Item label='Description' required>
                                    <Input.TextArea size='large' rows={5} name='description' value={form.description} onChange={handleChange} placeholder="Write detailed description..." style={{ resize: 'none' }} />
                                </Item>
                            </Col>
                        </Row>
                        <Row gutter={20}>
                            <Col span={12}>
                                <Item label='Priority' required>
                                    <Select size='large' name='priority' value={form.priority} onChange={(value) => handleSelectChange('priority', value)} placeholder='Select priority level'>
                                        <Select.Option value="low">Low</Select.Option>
                                        <Select.Option value="medium">Medium</Select.Option>
                                        <Select.Option value="high">High</Select.Option>
                                    </Select>
                                </Item>
                            </Col>
                            <Col span={12}>
                                <Item label='Status' required>
                                    <Select size='large' name='status' value={form.status} onChange={(value) => handleSelectChange('status', value)} placeholder='Select status'>
                                        <Select.Option value="pending">Pending</Select.Option>
                                        <Select.Option value="in-progress">In Progress</Select.Option>
                                        <Select.Option value="completed">Completed</Select.Option>
                                    </Select>
                                </Item>
                            </Col>
                            <Col span={12}>
                                <Item label='Created At' required>
                                    <DatePicker size='large' onChange={dateChange}  value={form.created_at ? dayjs(form.created_at) : null} style={{ width: '100%' }} />
                                </Item>
                            </Col>
                            <Col span={12}>
                                <Item label='Category' required>
                                    <Select size='large' name='category' value={form.category} onChange={(value) => handleSelectChange('category', value)} placeholder='Select category'>
                                        <Select.Option value="work">Work</Select.Option>
                                        <Select.Option value="personal">Personal</Select.Option>
                                        <Select.Option value="study">Study</Select.Option>
                                    </Select>
                                </Item>
                            </Col>
                            <Col span={24}>
                                <Item className='mb-0'>
                                    <Button type='primary' htmlType='submit' loading={loading} onClick={handleSubmitt} size='large' className='w-100'>
                                        Create Todo
                                    </Button>
                                </Item>
                            </Col>
                        </Row>
                    </Form>

                </div>
            </div>
        </main>
    )
}

export default Hero