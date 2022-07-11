import React from "react";
import { Tooltip, Tag, List, Button, Popconfirm, Switch, Col, Row } from "antd";
import {
  CloseOutlined,
  CheckOutlined,
  DeleteOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import "./ToDoItem.scss";

export const ToDoItem = ({ item }) => {
  const [checked, setChecked] = useState(false);
  return (
    <List.Item
      extra={
        <Popconfirm
          title="Are you sure you want to delete?"
          onConfirm={() => {
            console.log("DELETE ITEM");
          }}
        >
          <Button className="remove-todo-button" type="text" danger>
            <DeleteOutlined />
          </Button>
        </Popconfirm>
      }
      className="list-item"
      key={1}
    >
      <Row>
        <Col span={1}>
          <Switch
            onChange={() => setChecked(!checked)}
            defaultChecked={checked}
          />
        </Col>
        <Col span={1}>
          {checked ? (
            <Tag color="green" className="todo-tag">
              <CheckOutlined />
            </Tag>
          ) : (
            <Tag color="red" className="todo-tag">
              <MinusOutlined />
            </Tag>
          )}
        </Col>
        <Col>
          {checked ? <p style={{'textDecoration': 'line-through'}}>sdasda</p> : <p>sdasda</p>}
        </Col>
      </Row>
    </List.Item>
  );
};
