import React from "react";
import { useState, useEffect } from "react";
import { Row, Col } from "antd";
import { Input, Button, Card, Divider, List } from "antd";
import { SearchOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { ToDoItem } from "../ToDoItem/ToDoItem";
import useAxiosFetch from "../../hooks/useAxiosFetch"



export const ToDoList = () => {
  const [list, setList] = useState ([]);
  const { data, fetchError, isLoading } = useAxiosFetch('https://jsonplaceholder.typicode.com/todos');

  useEffect (() => {
    setList(data);
  }, [data])

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
          {isLoading && <p>Loading my list...</p>}
          {!isLoading && fetchError && <p>{fetchError}</p>}
          <List
            className="demo-loadmore-list"
            itemLayout="vertical"
            dataSource={list} //ovdje proslijedjujem niz podataka koje primam
            renderItem={(item) => (
              <ToDoItem key={item.id} item={item}/>
            )}
          />
        </Card>
      </Col>
    </div>
  );
};
