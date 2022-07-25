import React from "react";
import { useNavigate } from "react-router-dom";
import { useLoggedInUser } from "../../hooks/services/useTasks";
import useUpdateEffect from "../../hooks/services/useUpdateEffect";
import { Row, Col } from "antd";
import { useState } from "react";
import { usePutUser } from "../../hooks/services/useAuthentication";
import { useAddImage } from "../../hooks/services/useAuthentication";
import { Avatar, Typography, Button, Input, Form, Menu, notification, Badge, Upload } from "antd";
import {
  UserOutlined,
  MailFilled,
  CalendarFilled,
  KeyOutlined,
  ProfileOutlined,
  UploadOutlined
} from "@ant-design/icons";
const { Title } = Typography;


export const EditProfile = () => {
  const { data } = useLoggedInUser();
  const [firstName, setFirstName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const {mutate, data: dataUser} = usePutUser();
  const {mutate: mutateImage, data: dataImage} = useAddImage();
  const navigate = useNavigate();
  const [current, setCurrent] = useState("1");

  const openNotification = (placement) => {
    notification.info({
      description:
        'Uspjesno ste promijenili svoje podatke!',
      placement,
    });
  };

  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }

  const props = {
    onChange({ file, fileList }) {
      if (file.status !== 'uploading') {
        console.log(file, fileList);
        mutateImage(file);
      }
    },
  }

  const onClick = (e) => {
    setCurrent(e.key);
    if(current==1)
    {
      navigate('/profile')
    }
    else
    {
      navigate('/edit-profile')
    }
  };

  const items = [
    getItem('Profile', '1', <UserOutlined/>),
    getItem('Edit profile', '2', <ProfileOutlined/>),
  ];

  const onSubmitForm = (values) => {
    const formInput={"name": values.name, "email": values.email, "age": values.age, "password": values.password}
    mutate(formInput);
    navigate("/");
    openNotification('top')
  };

  useUpdateEffect(() => {
    //response na reques (vraca nam ko je prijavljen)
    if (data) {
      setFirstName(data.name);
      setEmail(data.email);
      setAge(data.age);    }
  }, [data]);

  useUpdateEffect(() => {
    //response na reques (vraca nam ko je prijavljen)
    if (dataImage) {
      console.log(dataImage)
     }
  }, [dataImage]);

  useUpdateEffect(() => {
    //response na request login (vraca nam token i storamo ga u localstorage)
    if (dataUser?.data) {
      console.log(dataUser.data);
      //navigate("/");
    }
  }, [dataUser]);
  return (
    <Row gutter={[16, 16]} style={{ marginRight: 16 }}>
      <Col span={8} style={{ marginTop: 40 }}>
        <Col span={24}>
          <div className="slika">
            <a>
            <Badge dot>
              <Avatar
                  className="imagee"
                  size={{xs: 50, sm: 70, md: 90, lg: 200, xl: 200, xxl: 200}}
                  src="/assets/img/6222481c0ad8761618b18e7e_profile-picture.jpg"
                />
            </Badge>
            </a>
          </div>
        </Col>
        <Col span={24}>
          <div className="slika">
            <Title id="naslov" level={3} style={{ fontWeight: "bold" }}>
              {firstName} {firstName}
            </Title>
            <Menu
              onClick={onClick}
              style={{
                width: '100%',
                marginTop: '5%'
              }}
              selectedKeys={["2"]}
              mode="vertical"
              theme="light"
              items={items}
            />
          </div>
        </Col>
      </Col>
      <Col span={16} style={{ marginTop: 40, paddingLeft: 90 }}>
        <Form onFinish={onSubmitForm}>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Row align="middle">
                <Col span={24} pull={5}>
                  <Row align="middle">
                    <Col span={24}>
                      <p style={{ fontSize: "small" }}>
                        <UserOutlined id="ikonica" /> First Name
                      </p>
                    </Col>
                    <Col span={24}>
                      <Form.Item name="name">
                        <Input value={firstName} placeholder={firstName} />
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col span={12}>
              <Row align="middle">
                <Col span={24} pull={5}>
                  <Row align="middle">
                    <Col span={24}>
                      <p style={{ fontSize: "small" }}>
                        <UserOutlined id="ikonica" /> Last Name
                      </p>
                    </Col>
                    <Col span={24}>
                      <Input disabled={true} placeholder={firstName} />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col span={12}>
              <Row align="middle">
                <Col span={24} pull={5}>
                  <Row align="middle">
                    <Col span={24}>
                      <p style={{ fontSize: "small" }}>
                        <MailFilled id="ikonica" /> Email
                      </p>
                    </Col>
                    <Col span={24}>
                      <Form.Item name="email">
                        <Input placeholder={email} value={email} />
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col span={12}>
              <Row align="middle">
                <Col span={24} pull={5}>
                  <Row align="middle">
                    <Col span={24}>
                      <p style={{ fontSize: "small" }}>
                        <CalendarFilled id="ikonica" /> Age
                      </p>
                    </Col>
                    <Col span={24}>
                      <Form.Item name="age">
                        <Input placeholder={age} />
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col span={12}>
              <Row align="middle">
                <Col span={24} pull={5}>
                  <Row align="middle">
                    <Col span={24}>
                      <p style={{ fontSize: "small" }}>
                        <KeyOutlined id="ikonica" /> Password
                      </p>
                    </Col>
                    <Col span={24}>
                      <Form.Item name="password" hasFeedback>
                        <Input.Password />
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col span={12}>
              <Row align="middle">
                <Col span={24} pull={5}>
                  <Row align="middle">
                    <Col span={24}>
                      <p style={{ fontSize: "small" }}>
                        <KeyOutlined id="ikonica" /> Repeat Password
                      </p>
                    </Col>
                    <Col span={24}>
                      <Form.Item name="confirm" dependencies={['password']} hasFeedback
                      rules={[
                        ({getFieldValue})=>({
                          validator(_,value) {
                            if(!value || getFieldValue('password')===value){
                              return Promise.resolve();
                            }
                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                          },
                        })
                      ]}>
                        <Input.Password />
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col span={19}>
              <Row justify="center">
                <Col span={24} >
                  <Row justify="center">
                      <Form.Item>
                        <Button type="primary" htmlType="submit">Submit</Button>
                      </Form.Item>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col span={19}>
              <Row justify="center">
                <Col span={24} >
                  <Row justify="center">
                    <Upload {...props}>
                      <Button icon={<UploadOutlined />}>Click to Upload</Button>
                    </Upload> 
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};
