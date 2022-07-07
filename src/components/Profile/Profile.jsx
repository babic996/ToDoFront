import React from "react";
import { Row, Col } from "antd";
import { Image, Typography, Card } from "antd";
import { UserOutlined, MailFilled, IdcardOutlined, CalendarFilled, PhoneFilled } from "@ant-design/icons";
import "./Profile.scss";
const { Title } = Typography;
const { Text } = Typography;

export const Profile = () => {
  return (
    <Row gutter={[16, 16]} style={{'margin-right': 16}}>
      <Col span={8} style={{'margin-top': 90}}>
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
            <Title id="naslov" level={3} style={{'font-weight': 'bold'}}>Aleksandar Babic</Title>
          </div>
        </Col>
      </Col>
      <Col span={16} style={{'margin-top': 91}}>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Card
              style={{
                width: "100%",
                "box-shadow": "4px -1px 9px 0px rgba(128,128,128,0.75)",
                "-webkit-box-shadow": "4px -1px 9px 0px rgba(128,128,128,0.75)",
                "-moz-box-shadow": "4px -1px 9px 0px rgba(128,128,128,0.75)",
              }}
            >
              <Row align="middle">
                <Col span={8}>
                  <UserOutlined id='ikonica'/>
                </Col>
                <Col span={16} pull={5}>
                  <Row align="middle">
                    <Col span={24}>
                      <p style={{ "font-size": "xx-small" }}>First Name</p>
                    </Col>
                    <Col span={24}>
                      <p
                        style={{
                          "font-size": "x-small",
                          "font-weight": "bold",
                        }}
                      >
                        Aleksandar
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={12}>
            <Card
              style={{
                width: "100%",
                "box-shadow": "4px -1px 9px 0px rgba(128,128,128,0.75)",
                "-webkit-box-shadow": "4px -1px 9px 0px rgba(128,128,128,0.75)",
                "-moz-box-shadow": "4px -1px 9px 0px rgba(128,128,128,0.75)",
              }}
            >
              <Row align="middle">
                <Col span={8}>
                  <UserOutlined id='ikonica'/>
                </Col>
                <Col span={16} pull={5}>
                  <Row align="middle">
                    <Col span={24}>
                      <p style={{ "font-size": "xx-small" }}>Last Name</p>
                    </Col>
                    <Col span={24}>
                      <p
                        style={{
                          "font-size": "x-small",
                          "font-weight": "bold",
                        }}
                      >
                        Babic
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={12}>
            <Card
              style={{
                width: "100%",
                "box-shadow": "4px -1px 9px 0px rgba(128,128,128,0.75)",
                "-webkit-box-shadow": "4px -1px 9px 0px rgba(128,128,128,0.75)",
                "-moz-box-shadow": "4px -1px 9px 0px rgba(128,128,128,0.75)",
              }}
            >
              <Row align="middle">
                <Col span={8}>
                  <MailFilled id='ikonica'/>
                </Col>
                <Col span={16} pull={5}>
                  <Row align="middle">
                    <Col span={24}>
                      <p style={{ "font-size": "xx-small" }}>Email</p>
                    </Col>
                    <Col span={24}>
                      <p
                        style={{
                          "font-size": "x-small",
                          "font-weight": "bold",
                        }}
                      >
                        aleksandar.babic996@gmail.com
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={12}>
          <Card
              style={{
                width: "100%",
                "box-shadow": "4px -1px 9px 0px rgba(128,128,128,0.75)",
                "-webkit-box-shadow": "4px -1px 9px 0px rgba(128,128,128,0.75)",
                "-moz-box-shadow": "4px -1px 9px 0px rgba(128,128,128,0.75)",
              }}
            >
              <Row align="middle">
                <Col span={8}>
                  <IdcardOutlined id='ikonica'/>
                </Col>
                <Col span={16} pull={5}>
                  <Row align="middle">
                    <Col span={24}>
                      <p style={{ "font-size": "xx-small" }}>Job Title</p>
                    </Col>
                    <Col span={24}>
                      <p
                        style={{
                          "font-size": "x-small",
                          "font-weight": "bold",
                        }}
                      >
                        Software Developer
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={12}>
            <Card
              style={{
                width: "100%",
                "box-shadow": "4px -1px 9px 0px rgba(128,128,128,0.75)",
                "-webkit-box-shadow": "4px -1px 9px 0px rgba(128,128,128,0.75)",
                "-moz-box-shadow": "4px -1px 9px 0px rgba(128,128,128,0.75)",
              }}
            >
              <Row align="middle">
                <Col span={8}>
                  <CalendarFilled id='ikonica'/>
                </Col>
                <Col span={16} pull={5}>
                  <Row align="middle">
                    <Col span={24}>
                      <p style={{ "font-size": "xx-small" }}>Date of Birth</p>
                    </Col>
                    <Col span={24}>
                      <p
                        style={{
                          "font-size": "x-small",
                          "font-weight": "bold",
                        }}
                      >
                        05.05.1996.
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={12}>
            <Card
              style={{
                width: "100%",
                "box-shadow": "4px -1px 9px 0px rgba(128,128,128,0.75)",
                "-webkit-box-shadow": "4px -1px 9px 0px rgba(128,128,128,0.75)",
                "-moz-box-shadow": "4px -1px 9px 0px rgba(128,128,128,0.75)",
              }}
            >
              <Row align="middle">
                <Col span={8}>
                  <PhoneFilled id='ikonica'/>
                </Col>
                <Col span={16} pull={5}>
                  <Row align="middle">
                    <Col span={24}>
                      <p style={{ "font-size": "xx-small" }}>Phone</p>
                    </Col>
                    <Col span={24}>
                      <p
                        style={{
                          "font-size": "x-small",
                          "font-weight": "bold",
                        }}
                      >
                        065/291-794
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
