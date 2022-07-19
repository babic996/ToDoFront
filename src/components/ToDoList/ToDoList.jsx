import React from "react";
import { useState, useEffect } from "react";
import { Row, Col } from "antd";
import { Input, Button, Card, List, Form, Spin } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { ToDoItem } from "../ToDoItem/ToDoItem";
import { useTasks } from "../../hooks/services/useTasks";
import { useAddTask } from "../../hooks/services/useTasks";
import useUpdateEffect from "../../hooks/services/useUpdateEffect";

export const ToDoList = () => {
  const { data: tasks } = useTasks();
  const [list, setList] = useState([]);
  const { mutate, data, isSuccess, isError, isLoading } = useAddTask();

  const onSubmitForm = (values) => {
    console.log('Success:', values);
    mutate({"description": values.addToDo})
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  useUpdateEffect(() => { //response na request login (vraca nam token i storamo ga u localstorage)
    if (data?.data){
      console.log(data.data)
      //navigate("/login");
    }
  }, [data])

  useEffect(() => {
    setList(tasks);
    console.log(list);
  }, [tasks]);

  return (
    <div>
      <Spin spinning={isLoading} size='large'>
      <Form 
        onFinish={onSubmitForm}
        onFinishFailed={onFinishFailed}
      >
        <Row gutter={[40, 16]}>
          <Col span={15} style={{ marginTop: 90 }} offset={1}>
            <Form.Item
              name="addToDo">
              <Input placeholder="What needs to be done?" />
            </Form.Item>
          </Col>
          <Col span={7} style={{ marginTop: 90 }}>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                icon={<PlusCircleOutlined />}
                style={{ width: "100%" }}
              >
                Add
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <Col span={22} push={1} style={{ marginBottom: 20 }}>
        <Card
          title="Card title"
          bordered={true}
          style={{
            width: "100%",
            marginTop: 50,
          }}
        >
          {/* {isLoading && <p>Loading my list...</p>}
          {!isLoading && fetchError && <p>{fetchError}</p>} */}
          <List
            className="demo-loadmore-list"
            itemLayout="vertical"
            dataSource={list} //ovdje proslijedjujem niz podataka koje primam
            renderItem={(item) => (
              <ToDoItem rowKey={item._id} item={item} /> //todo:
            )}
          />
        </Card>
      </Col>
      </Spin>
    </div>
  );
};
