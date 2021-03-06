import React from "react";
import useUpdateEffect from "../../hooks/services/useUpdateEffect";
import {
  Tag,
  List,
  Button,
  Popconfirm,
  Switch,
  Col,
  Row,
  Spin,
  Modal,
  Form,
  Input,
  notification
} from "antd";
import {
  CheckOutlined,
  DeleteOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import "./ToDoItem.scss";
import { useDeleteTask } from "../../hooks/services/useTasks";
import { useUpdateTaskCompleted } from "../../hooks/services/useTasks";
import { useUpdateTaskDescription } from "../../hooks/services/useTasks";
import { useEffect } from "react";


export const ToDoItem = ({ item }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [checked, setChecked] = useState(item.completed)
  const { mutate, data, isSuccess, isError, isLoading } = useDeleteTask();
  const { mutate: mutatePutCompleted, data: dataPutCompleted, isLoading: isLoadingCompleted } = useUpdateTaskCompleted();
  const { mutate: mutatePutDescription, data: dataPutDescription, isLoading: isLoadingDescription } = useUpdateTaskDescription();
  const [updateDescription, setUpdateDescription] = useState('');

  const openNotificationDelete = (placement) => {
    notification.info({
      description:
        'Uspjesno ste izbrisali obavezu!',
      placement,
    });
  };

  const openNotificationUpdate = (placement) => {
    notification.info({
      description:
        'Uspjesno ste promjenili obavezu!',
      placement,
    });
  };

  const showEdit = () => {
    setIsModalVisible(true);
  };

  const confirmUpdate = () => {
    setIsModalVisible(false);
    console.log(updateDescription);
    mutatePutDescription({"description": updateDescription, "id": item._id});
    setUpdateDescription('');
    openNotificationUpdate('top');
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleChange = (e) => {
    setUpdateDescription(e.target.value);
  }

  useUpdateEffect(() => {
    //response na request login (vraca nam token i storamo ga u localstorage)
    if (data?.data) {
      console.log(data.data);
      //navigate("/");
    }
    else if(dataPutDescription?.data)
    {
      console.log(dataPutDescription.data);
    }
    else if(dataPutCompleted?.data)
    {
      console.log(dataPutCompleted.data)
    }
  }, [data, dataPutDescription, dataPutCompleted]);

  return (
    <Spin spinning={isLoading || isLoadingCompleted || isLoadingDescription} size="large">
      <List.Item
        extra={[
          <Popconfirm
            title="Are you sure you want to delete?"
            onConfirm={() => {
              mutate(item._id);
              openNotificationDelete('top');
            }}
          >
            <Button className="button" type="text" danger>
              <DeleteOutlined />
            </Button>
          </Popconfirm>,
          <>
            <Button className="button" type="primary" onClick={showEdit}>
              Edit
            </Button>
            <Modal
              title="Edit"
              visible={isModalVisible}
              onOk={confirmUpdate}
              onCancel={handleCancel}
              width={1000}
            >
              <Form
                name="basic"
                labelCol={{
                  span: 24,
                }}
                wrapperCol={{
                  span: 24,
                }}
                initialValues={{
                  remember: true,
                }}
                //onFinish={onFinishUpdate}
                //onFinishFailed={onFinishUpdateFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="Description"
                  name="description"
                  rules={[
                    {
                      required: false,
                      message: "Please input description!",
                    },
                  ]}
                >
                  <Input value={updateDescription} onChange={handleChange}/>
                </Form.Item>
              </Form>
            </Modal>
          </>,
        ]}
        className="list-item"
      >
        <Row>
          <Col span={1}>
            <Switch
              onChange={() =>{
                mutatePutCompleted({"completed": !item.completed, "id": item._id})}}
                defaultChecked={item.completed}
            />
          </Col>
          <Col span={1} className="col">
            {item.completed ? (
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
            {item.completed ? (
              <p className="list" style={{ textDecoration: "line-through" }}>
                {item.description}
              </p>
            ) : (
              <p className="list">{item.description}</p>
            )}
          </Col>
        </Row>
      </List.Item>
    </Spin>
  );
};
