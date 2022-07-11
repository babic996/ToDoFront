import React from "react";
import { Row, Col } from "antd";
import { Input, Button, Card, Divider, List } from "antd";
import { SearchOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { ToDoItem } from "../ToDoItem/ToDoItem";

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];

export const ToDoList = () => {
  return (
    <div>
      <Row gutter={[48, 16]}>
        <Col span={15} style={{ "marginTop": 90 }} offset={1}>
          <Input
            placeholder="What needs to be done?"
            prefix={<SearchOutlined />}
          />
        </Col>
        <Col span={7} style={{ "marginTop": 90 }}>
          <Button
            type="primary"
            icon={<PlusCircleOutlined />}
            style={{ width: "100%" }}
          >
            Add
          </Button>
        </Col>
      </Row>
      <Col span={22} push={1} style={{ "marginBottom": 20 }}>
        <Card
          title="Card title"
          bordered={true}
          style={{
            width: "100%",
            "marginTop": 50,
          }}
        >
          <List
            className="demo-loadmore-list"
            itemLayout="vertical"
            dataSource={data}
            renderItem={(item) => (
              <ToDoItem item={item}/>
            )}
          />
        </Card>
      </Col>
    </div>
  );
};
