import React from "react";
import { Link } from "react-router-dom";
import { useLoggedInUser } from "../../hooks/services/useTasks";
import useUpdateEffect from "../../hooks/services/useUpdateEffect";
import { Row, Col } from "antd";
import { useState } from "react";
import { Image, Typography, Button, Input, DatePicker, Form } from "antd";
import {
  UserOutlined,
  MailFilled,
  IdcardOutlined,
  CalendarFilled,
  PhoneFilled,
  KeyOutlined,
} from "@ant-design/icons";
const { Title } = Typography;

export const EditProfile = () => {
  const { data } = useLoggedInUser();
  const [firstName, setFirstName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const onSubmitForm = (values) => {
    console.log(values);
  };

  useUpdateEffect(() => {
    //response na request login (vraca nam token i storamo ga u localstorage)
    if (data) {
      console.log(data);
      setFirstName(data.name);
      setEmail(data.email);
      setAge(data.age);
      //navigate("/login");
    }
  }, [data]);
  return (
    <Row gutter={[16, 16]} style={{ marginRight: 16 }}>
      <Col span={8} style={{ marginTop: 90 }}>
        <Col span={24}>
          <div className="slika">
            <Image
              className="imagee"
              preview={false}
              src="/assets/img/6222481c0ad8761618b18e7e_profile-picture.jpg"
            />
          </div>
        </Col>
        <Col span={24}>
          <div className="slika">
            <Title id="naslov" level={3} style={{ fontWeight: "bold" }}>
              Aleksandar Babic
            </Title>
          </div>
        </Col>
      </Col>
      <Col span={16} style={{ marginTop: 90, paddingLeft: 90 }}>
        <Form onFinish={onSubmitForm}>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Row align="middle">
                <Col span={24} pull={5}>
                  <Row align="middle">
                    <Col span={24}>
                      <p style={{ fontSize: "xx-small" }}>
                        <UserOutlined id="ikonica" /> First Name
                      </p>
                    </Col>
                    <Col span={24}>
                      <Form.Item name="name">
                        <Input value={firstName} />
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
                      <p style={{ fontSize: "xx-small" }}>
                        <UserOutlined id="ikonica" /> Last Name
                      </p>
                    </Col>
                    <Col span={24}>
                      <Input value={"Babic"} />
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
                      <p style={{ fontSize: "xx-small" }}>
                        <MailFilled id="ikonica" /> Email
                      </p>
                    </Col>
                    <Col span={24}>
                      <Form.Item name="email">
                        <Input value={email} />
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
                      <p style={{ fontSize: "xx-small" }}>
                        <IdcardOutlined id="ikonica" /> Job Title
                      </p>
                    </Col>
                    <Col span={24}>
                      <Input value={"Software Developer"} />
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
                      <p style={{ fontSize: "xx-small" }}>
                        <CalendarFilled id="ikonica" /> Date of Birth
                      </p>
                    </Col>
                    <Col span={24}>
                      <DatePicker style={{ width: "100%" }} />
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
                      <p style={{ fontSize: "xx-small" }}>
                        <PhoneFilled id="ikonica" /> Phone
                      </p>
                    </Col>
                    <Col span={24}>
                      <Input value={"065/291-794"} />
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
                      <p style={{ fontSize: "xx-small" }}>
                        <KeyOutlined id="ikonica" /> Password
                      </p>
                    </Col>
                    <Col span={24}>
                      <Input.Password />
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
                      <p style={{ fontSize: "xx-small" }}>
                        <KeyOutlined id="ikonica" /> Repeat Password
                      </p>
                    </Col>
                    <Col span={24}>
                      <Input.Password />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};
