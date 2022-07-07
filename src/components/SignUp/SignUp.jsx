import { Button, Form, Input, Image } from 'antd';
import { KeyOutlined, MailFilled, CloseCircleOutlined } from '@ant-design/icons';
import { Anchor } from 'antd';
import React from 'react';
import { Link } from "react-router-dom";
import {Row, Col} from 'antd';
import { Card } from 'antd';
import './SignUp.scss'



export const SignUp = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
      <Row className='main'>
        <Col span={12}>
        <Link to='/'><CloseCircleOutlined style={{margin: 20, color: 'white', 'font-size': 'large'}}/></Link>
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

              <Form.Item
                name="repate-password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input.Password  placeholder='Repate Password' prefix={<KeyOutlined />}/>
              </Form.Item>

              <Form.Item
              >
                <Button id='button' htmlType="submit">
                  SIGN UP
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
  )
}
