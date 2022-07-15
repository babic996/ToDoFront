import React from "react";
import {  Tag, List, Button, Popconfirm, Switch, Col, Row } from "antd";
import {
  CheckOutlined,
  DeleteOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import "./ToDoItem.scss";

export const ToDoItem = ({ item }) => {
  const [checked, setChecked] = useState(false);

  const text="sdajkkdajsakdjsakdjsakdjadkadsakd";
  return (
    <List.Item
      extra={[
        <Popconfirm
          title="Are you sure you want to delete?"
          onConfirm={() => {
            console.log("DELETE ITEM");
          }}
        >
          <Button className="button" type="text" danger>
            <DeleteOutlined />
          </Button>
        </Popconfirm>,
        <Button className="button" type="primary">Edit</Button>,
      ]}
      className="list-item"
    >
      <Row>
        <Col span={1}>
          <Switch
            onChange={() => setChecked(!checked)}
            defaultChecked={checked}
          />
        </Col>
        <Col span={1} className="col">
          {checked ? (
            <Tag color="green" id="todo-tag" className="todo-tag">
              <CheckOutlined />
            </Tag>
          ) : (
            <Tag color="red" id="todo-tag" className="todo-tag">
              <MinusOutlined />
            </Tag>
          )}
        </Col>
          <Col span={2} className="col">
            {checked ? <p className="list" style={{'textDecoration': 'line-through'}}>{item.description}...</p> : <p className="list">{item.description}...</p>}
          </Col>
      </Row>
    </List.Item>
  );
};
