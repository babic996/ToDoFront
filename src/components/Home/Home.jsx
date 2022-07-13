import React from "react";
import { Image, Button } from "antd";
import { Row, Col } from "antd";
import { Typography } from "antd";
import "./Home.scss";
const { Title, Text } = Typography;

export const Home = () => {
  return (
    <div className="container">
      <Row gutter={[8, 8]} align="middle">
        <Col span={12}>
          <div className="text">
            <Title className="title">To Do List React</Title>
            <p className="description">
              Nam vitae imperdiet urna, non congue lacus. Phasellus efficitur
              suscipit arcu, quis aliquam tortor posuere eget. Mauris posuere
              eget.
            </p>
            <div className="button">
              <Button href="/login" type="primary">
                Login
              </Button>
            </div>
          </div>
        </Col>
        <Col span={12}>
          <Image
            className="image"
            preview={false}
            src="/assets/img/to-do-list.png"
          />
        </Col>
      </Row>
    </div>
  );
};
