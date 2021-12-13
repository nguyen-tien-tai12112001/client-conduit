import { Button, Col, Divider, Form, Input, Row, Typography } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signin } from '../../actions/auth';

const { Text } = Typography;
const style = {
  background: '#fafdff',
  margin: '100px 0px 0px 0px',
  fontSize: '30px',
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    dispatch(signin(values, navigate));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Row>
      <Col span={8} />
      <Col span={8}>
        <Divider orientation="center" style={style} plain>
          Sign in
        </Divider>
        <Divider orientation="center">
          <Text type="success">
            <Link to="/register">Need an account?</Link>
          </Text>
        </Divider>

        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Signin
            </Button>
          </Form.Item>
        </Form>
      </Col>
      <Col span={8} />
    </Row>
  );
};

export default Login;
