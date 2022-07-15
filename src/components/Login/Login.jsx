import { Button, Form, Input, Image } from "antd";
import { useAuth } from "../../hooks/contexts/AuthProvider";
import { useAuthentication } from "../../hooks/services/useAuthentication";
import useUpdateEffect from "../../hooks/services/useUpdateEffect";
import { useState, useEffect } from "react";
import {
  KeyOutlined,
  MailFilled,
  CloseCircleOutlined,
  GoogleOutlined,
} from "@ant-design/icons";
import { Divider, Checkbox } from "antd";
import React from "react";
import { Row, Col } from "antd";
import { Card } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";

export const Login = () => {
  //const [loginData, setLoginData] = useState({});
  const {mutate, data, isSuccess, isError, isLoading} = useAuthentication();
  const { storeToken, clearToken } = useAuth();
  const navigate = useNavigate();

  
  const onSubmit = (loginValues) => {
    console.log(loginValues)
    mutate(loginValues);
  }

   //initial clear
   useEffect(() => {
    clearToken();
  }, [])

  useUpdateEffect(() => {
    if (data?.data){
      console.log(data.data)
      storeToken(data.data.token);
      navigate("/");
    }
  }, [data])
  

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Row className="main">
      <Col span={12}>
        <Link to="/">
          <CloseCircleOutlined
            style={{ margin: 20, color: "white", fontSize: "30px" }}
          />
        </Link>
        <Image
          className="image_left"
          preview={false}
          style={{ width: "80%", height: "80%" }}
          src="/assets/img/todolist.png"
        />
      </Col>
      <Col span={12} xs={24} sm={24} md={12} style={{ padding: 20 }}>
        <Card
          className="card"
          title="Welcome ToDoList"
          style={{
            borderRadius: 10,
            height: "100%",
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
            onFinish={onSubmit}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item>
              <Button
                id="button_google"
                htmlType="submit"
                icon={<GoogleOutlined />}
              >
                Login with Google
              </Button>
            </Form.Item>
            <Divider plain>Or</Divider>
            <Form.Item
              name="email"
              className="inputShadow"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                  type: "email",
                },
              ]}
            >
              <Input size="large" placeholder="Email" prefix={<MailFilled />} />
            </Form.Item>

            <Form.Item
              name="password"
              className="inputShadow"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password
                size="large"
                placeholder="Password"
                prefix={<KeyOutlined />}
              />
            </Form.Item>

            {/* <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                Forgot password?
              </a>
            </Form.Item> */}
            <Form.Item>
              <Button id="button" type="primary" htmlType="submit">
                LOGIN
              </Button>
            </Form.Item>
            <Form.Item>
              <div style={{ textAlign: "center" }}>
                Don't have an account? <Link to="/signup">Register</Link>
              </div>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};
