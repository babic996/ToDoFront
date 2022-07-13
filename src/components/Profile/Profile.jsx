import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import { Image, Typography, Card, Button } from "antd";
import { UserOutlined, MailFilled, IdcardOutlined, CalendarFilled, PhoneFilled } from "@ant-design/icons";
import "./Profile.scss";
const { Title } = Typography;
const { Text } = Typography;

export const Profile = () => {
  return (
    <Row gutter={[16, 16]} style={{'marginRight': 16}}>
      <Col span={8} style={{'marginTop': 90}}>
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
            <Title id="naslov" level={3} style={{'fontWeight': 'bold'}}>Aleksandar Babic</Title>
          </div>
        </Col>
        <Col span={24}>
          <div className="slika">
            <Link to="/edit-profile"><Button type="primary" style={{'marginTop': 30}}>Edit</Button></Link>
          </div>
        </Col>
      </Col>
      <Col span={16} style={{'marginTop': 90}}>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Card
              style={{
                width: "100%",
                "boxShadow": "4px -1px 9px 0px rgba(128,128,128,0.75)",
                "WebkitBoxShadow": "4px -1px 9px 0px rgba(128,128,128,0.75)",
                "MozBoxShadow": "4px -1px 9px 0px rgba(128,128,128,0.75)",
              }}
              className="card"
            >
              <Row align="middle">
                <Col span={8}>
                  <UserOutlined id='ikonica'/>
                </Col>
                <Col span={16} pull={5}>
                  <Row align="middle">
                    <Col span={24}>
                      <p style={{ "fontSize": "xx-small" }}>First Name</p>
                    </Col>
                    <Col span={24}>
                      <Title
                        style={{
                          "fontSize": "x-small",
                          "fontWeight": "bold",
                        }}
                      >
                        Aleksandar
                      </Title>
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
                "boxShadow": "4px -1px 9px 0px rgba(128,128,128,0.75)",
                "WebkitBoxShadow": "4px -1px 9px 0px rgba(128,128,128,0.75)",
                "MozBoxShadow": "4px -1px 9px 0px rgba(128,128,128,0.75)",
              }}
              className="card"
            >
              <Row align="middle">
                <Col span={8}>
                  <UserOutlined id='ikonica'/>
                </Col>
                <Col span={16} pull={5}>
                  <Row align="middle">
                    <Col span={24}>
                      <p style={{ "fontSize": "xx-small" }}>Last Name</p>
                    </Col>
                    <Col span={24}>
                      <Title
                        style={{
                          "fontSize": "x-small",
                          "fontWeight": "bold",
                        }}
                      >
                        Babic
                      </Title>
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
                "boxShadow": "4px -1px 9px 0px rgba(128,128,128,0.75)",
                "WebkitBoxShadow": "4px -1px 9px 0px rgba(128,128,128,0.75)",
                "MozBoxShadow": "4px -1px 9px 0px rgba(128,128,128,0.75)",
              }}
              className="card"
            >
              <Row align="middle">
                <Col span={8}>
                  <MailFilled id='ikonica'/>
                </Col>
                <Col span={16} pull={5}>
                  <Row align="middle">
                    <Col span={24}>
                      <p style={{ "fontSize": "xx-small" }}>Email</p>
                    </Col>
                    <Col span={24}>
                      <Title
                        style={{
                          "fontSize": "x-small",
                          "fontWeight": "bold",
                        }}
                      >
                        aleksandar.babic996@gmail.com
                      </Title>
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
                "boxShadow": "4px -1px 9px 0px rgba(128,128,128,0.75)",
                "WebkitBoxShadow": "4px -1px 9px 0px rgba(128,128,128,0.75)",
                "MozBoxShadow": "4px -1px 9px 0px rgba(128,128,128,0.75)",
              }}
              className="card"
            >
              <Row align="middle">
                <Col span={8}>
                  <IdcardOutlined id='ikonica'/>
                </Col>
                <Col span={16} pull={5}>
                  <Row align="middle">
                    <Col span={24}>
                      <p style={{ "fontSize": "xx-small" }}>Job Title</p>
                    </Col>
                    <Col span={24}>
                      <Title
                        style={{
                          "fontSize": "x-small",
                          "fontWeight": "bold",
                        }}
                      >
                        Software Developer
                      </Title>
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
                "boxShadow": "4px -1px 9px 0px rgba(128,128,128,0.75)",
                "WebkitBoxShadow": "4px -1px 9px 0px rgba(128,128,128,0.75)",
                "MozBoxShadow": "4px -1px 9px 0px rgba(128,128,128,0.75)",
              }}
              className="card"
            >
              <Row align="middle">
                <Col span={8}>
                  <CalendarFilled id='ikonica'/>
                </Col>
                <Col span={16} pull={5}>
                  <Row align="middle">
                    <Col span={24}>
                      <p style={{ "fontSize": "xx-small" }}>Date of Birth</p>
                    </Col>
                    <Col span={24}>
                      <Title
                        style={{
                          "fontSize": "x-small",
                          "fontWeight": "bold",
                        }}
                      >
                        05.05.1996.
                      </Title>
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
                "boxShadow": "4px -1px 9px 0px rgba(128,128,128,0.75)",
                "WebkitBoxShadow": "4px -1px 9px 0px rgba(128,128,128,0.75)",
                "MozBoxShadow": "4px -1px 9px 0px rgba(128,128,128,0.75)",
              }}
              className="card"
            >
              <Row align="middle">
                <Col span={8}>
                  <PhoneFilled id='ikonica'/>
                </Col>
                <Col span={16} pull={5}>
                  <Row align="middle">
                    <Col span={24}>
                      <p style={{ "fontSize": "xx-small" }}>Phone</p>
                    </Col>
                    <Col span={24}>
                      <Title
                        style={{
                          "fontSize": "x-small",
                          "fontWeight": "bold",
                        }}
                      >
                        065/291-794
                      </Title>
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
