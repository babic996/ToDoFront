import { Button, Form, Input, Image } from 'antd';
import { KeyOutlined, MailFilled, CloseCircleOutlined, GoogleOutlined } from '@ant-design/icons';
import { Divider, Checkbox } from 'antd';
import { Link } from "react-router-dom";
import React from 'react';
import {Row, Col} from 'antd';
import { Card } from 'antd';
import './Login.scss'



export const Login = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
      <Row className='main'>
        <Col span={12}>
        <CloseCircleOutlined style={{margin: 20, color: 'white', 'font-size': 'large'}}/>
        <Image className='image_left' preview={false}
            src="/assets/img/todolist.png"
        />
        </Col>
        <Col span={12}>
          <Card className='card' title="Welcome ToDoList" style={{
          margin: 20,
          'border-radius': 10,
          height: '90%',
          }}>
            <Form
              name="basic"
              labelCol={{
                span: 24,
              }}
              wrapperCol={{
                span: 24,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
              >
                <Button id='button_google' htmlType="submit" icon={<GoogleOutlined />}>
                  Login with Google
                </Button>
              </Form.Item>
              <Divider plain>Or</Divider>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Please input your email!',
                  },
                ]}
              >
                <Input placeholder='Email' prefix={<MailFilled />}/>
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input.Password placeholder='Password' prefix={<KeyOutlined />}/>
              </Form.Item>

              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                    Forgot password?
                </a>
              </Form.Item>
              <Form.Item>
                <div style={{'text-align': 'center'}}>
                  Don't have an account? <Link to='/signup'>Register</Link>
                </div>
              </Form.Item>
              <Form.Item
              >
                <Button id='button' htmlType="submit">
                  LOGIN
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
  )
}
