import React from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "antd";
import { Badge, Typography, Card, Avatar } from "antd";
import { useLoggedInUser } from "../../hooks/services/useTasks";
import useUpdateEffect from "../../hooks/services/useUpdateEffect";
import {
  UserOutlined,
  MailFilled,
  CalendarFilled,
  ProfileOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import "./Profile.scss";
import { useState } from "react";
const { Title } = Typography;

export const Profile = () => {
  const { data } = useLoggedInUser();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [current, setCurrent] = useState("2");
  const navigate = useNavigate();

  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }

  const onClick = (e) => {
    setCurrent(e.key);
    if (current == 1) {
      navigate("/profile");
    } else {
      navigate("/edit-profile");
    }
  };

  const items = [
    getItem("Profile", "1", <UserOutlined />),
    getItem("Edit profile", "2", <ProfileOutlined />),
  ];

  useUpdateEffect(() => {
    //response na request login (vraca nam token i storamo ga u localstorage)
    if (data) {
      console.log(data);
      setName(data.name);
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
            <Avatar
              className="imagee"
              size={{ xs: 50, sm: 70, md: 90, lg: 200, xl: 200, xxl: 200 }}
              preview={false}
              src="/assets/img/6222481c0ad8761618b18e7e_profile-picture.jpg"
            />
          </div>
        </Col>
        <Col span={24}>
          <div className="slika">
            <Title id="naslov" level={3} style={{ fontWeight: "bold" }}>
              {name} {name}
            </Title>
          </div>
        </Col>
        <Col span={24}>
          <div className="slika">
            {/* <Link to="/edit-profile"><Button icon={<UserOutlined />} style={{'marginTop': 30, width: '100%', backgroundColor: 'darkslateblue', color: 'white', textAlign: 'left'}}>Edit</Button></Link>
            <Link to="/profile"><Button  style={{'marginTop': 5, width: '100%', backgroundColor: 'darkslateblue', color: 'white'}}>Profile</Button></Link> */}
            <Menu
              onClick={onClick}
              style={{
                width: "100%",
                marginTop: "5%",
              }}
              //defaultOpenKeys={["sub1"]}
              selectedKeys={["1"]}
              mode="vertical"
              theme="light"
              items={items}
            />
          </div>
        </Col>
      </Col>
      <Col span={16} style={{ marginTop: 90 }}>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Card
              style={{
                width: "100%",
                boxShadow: "4px -1px 9px 0px rgba(128,128,128,0.75)",
                WebkitBoxShadow: "4px -1px 9px 0px rgba(128,128,128,0.75)",
                MozBoxShadow: "4px -1px 9px 0px rgba(128,128,128,0.75)",
              }}
              className="card"
            >
              <Row align="middle">
                <Col span={8}>
                  <UserOutlined id="ikonica" />
                </Col>
                <Col span={16} pull={5}>
                  <Row align="middle">
                    <Col span={24}>
                      <p style={{ fontSize: "small" }}>First Name</p>
                    </Col>
                    <Col span={24}>
                      <Title
                        style={{
                          fontSize: "medium",
                          fontWeight: "bold",
                        }}
                      >
                        {name}
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
                boxShadow: "4px -1px 9px 0px rgba(128,128,128,0.75)",
                WebkitBoxShadow: "4px -1px 9px 0px rgba(128,128,128,0.75)",
                MozBoxShadow: "4px -1px 9px 0px rgba(128,128,128,0.75)",
              }}
              className="card"
            >
              <Row align="middle">
                <Col span={8}>
                  <UserOutlined id="ikonica" />
                </Col>
                <Col span={16} pull={5}>
                  <Row align="middle">
                    <Col span={24}>
                      <p style={{ fontSize: "small" }}>Last Name</p>
                    </Col>
                    <Col span={24}>
                      <Title
                        style={{
                          fontSize: "medium",
                          fontWeight: "bold",
                        }}
                      >
                        {name}
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
                boxShadow: "4px -1px 9px 0px rgba(128,128,128,0.75)",
                WebkitBoxShadow: "4px -1px 9px 0px rgba(128,128,128,0.75)",
                MozBoxShadow: "4px -1px 9px 0px rgba(128,128,128,0.75)",
              }}
              className="card"
            >
              <Row align="middle">
                <Col span={8}>
                  <MailFilled id="ikonica" />
                </Col>
                <Col span={16} pull={5}>
                  <Row align="middle">
                    <Col span={24}>
                      <p style={{ fontSize: "small" }}>Email</p>
                    </Col>
                    <Col span={24}>
                      <Title
                        style={{
                          fontSize: "medium",
                          fontWeight: "bold",
                        }}
                      >
                        {email}
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
                boxShadow: "4px -1px 9px 0px rgba(128,128,128,0.75)",
                WebkitBoxShadow: "4px -1px 9px 0px rgba(128,128,128,0.75)",
                MozBoxShadow: "4px -1px 9px 0px rgba(128,128,128,0.75)",
              }}
              className="card"
            >
              <Row align="middle">
                <Col span={8}>
                  <CalendarFilled id="ikonica" />
                </Col>
                <Col span={16} pull={5}>
                  <Row align="middle">
                    <Col span={24}>
                      <p style={{ fontSize: "small" }}>Age</p>
                    </Col>
                    <Col span={24}>
                      <Title
                        style={{
                          fontSize: "medium",
                          fontWeight: "bold",
                        }}
                      >
                        {age}
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
