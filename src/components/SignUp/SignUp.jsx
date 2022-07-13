import { Button, Form, Input, Image, InputNumber } from 'antd';
import { KeyOutlined, MailFilled, CloseCircleOutlined, UserOutlined, FieldNumberOutlined } from '@ant-design/icons';
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
        <Row>
        <Link to='/'><CloseCircleOutlined style={{margin: 20, color: 'white', 'fontSize': '30px'}}/></Link>
        </Row>
        <Row>
        <Image className='image_left' preview={false} style={{width: '80%', height: '80%'}}
            src="/assets/img/todolist.png"
        />
        </Row>
        </Col>
        <Col span={12} xs={24} sm={24} md={12} style={{padding: 20}}>
          <Card className='card' title="Welcome ToDoList" style={{
          'borderRadius': 10,
          height: '100%',
          }}
          >
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
                name="name"
                className='inputShadow'
                rules={[
                  {
                    required: true,
                    message: 'Please input your name!',
                  },
                ]}
              >
                <Input size="large" placeholder='Name' prefix={<UserOutlined />}/>
              </Form.Item>

              <Form.Item
                name="email"
                className='inputShadow'
                rules={[
                  {
                    required: true,
                    type: 'email',
                    message: 'Please input your email!',
                  },
                ]}
              >
                <Input size="large" placeholder='Email' prefix={<MailFilled />}/>
              </Form.Item>

              <Form.Item
                name="age"
                className='inputShadow'
                rules={[
                  {
                    required: true,
                    type: 'number',
                    message: 'Please input your age!',
                  },
                ]}
              >
                <InputNumber size="large" prefix={<FieldNumberOutlined />} placeholder='Age' style={{width: '100%'}} min={1} max={100} />
              </Form.Item>

              <Form.Item
                name="password"
                className='inputShadow'
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input.Password size="large" placeholder='Password' prefix={<KeyOutlined />}/>
              </Form.Item>

              <Form.Item
                name="repeat-password"
                className='inputShadow'
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input.Password size="large"  placeholder='Repeat Password' prefix={<KeyOutlined />}/>
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
