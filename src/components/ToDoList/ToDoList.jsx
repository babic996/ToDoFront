import React from "react";
import { useState, useEffect } from "react";
import { Row, Col } from "antd";
import { Input, Button, Card, List, Form, Spin, Pagination, notification } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { ToDoItem } from "../ToDoItem/ToDoItem";
import { useTasks } from "../../hooks/services/useTasks";
import { useAddTask } from "../../hooks/services/useTasks";
import useUpdateEffect from "../../hooks/services/useUpdateEffect";


export const ToDoList = () => {
  const { data: tasks } = useTasks();
  const [form] = Form.useForm();
  const [list, setList] = useState([]);
  const pageSize = 3;
  const [currentPage, setCurrentPage] = useState(1);
  //const [totalPage, setTotalPage] = useState(0);
  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const { mutate, data, isSuccess, isError, isLoading } = useAddTask();

  const openNotificationAdd = (placement) => {
    notification.info({
      description:
        'Uspjesno ste se dodali obavezu!',
      placement,
    });
  };
 

  useEffect(() => {
    setList(tasks);
    setSearchResult(tasks);
    //searchResult?.length==0 ? setTotalPage(tasks?.length) : setTotalPage(searchResult?.length)h
    //setTotalPage(tasks?.length)
    setMinIndex(0);
    setMaxIndex(pageSize);
  }, [tasks, list]);


  const onSubmitForm = (values) => {
    console.log('Success:', values);
    mutate({"description": values.addToDo})
    form.resetFields();
    openNotificationAdd('top')
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  /*
  useUpdateEffect(() => { //response na request 
      console.log(data.data)
      //navigate("/login");
    }
  }, [data])*/

  const handleChange = (page) => {
    setCurrentPage(page);
    setMinIndex((page-1)*pageSize);
    setMaxIndex(page*pageSize);
  }

  
  useEffect(()=>{
    const filteredResults = list?.filter((item)=>
    ((item.description).toLowerCase()).includes(search.toLowerCase()));
    setSearchResult(filteredResults.reverse());
    //setTotalPage(searchResult?.length);
  }, [search])

  

  return (
    <div>
      <Spin spinning={isLoading} size='large'>
      <Form
        form={form} 
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
        <Row gutter={[40, 16]}>
          <Col span={15} offset={1}>
              <Input value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search" />
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
          <List
            className="demo-loadmore-list"
            itemLayout="vertical"
            dataSource={searchResult} //ovdje proslijedjujem niz podataka koje primam
            renderItem={(item, index) => 
              index >= minIndex &&
              index < maxIndex &&
              (
              <ToDoItem rowKey={item._id} item={item} /> //todo:
            )}
          />
        </Card>
        <Row justify="center" style={{marginTop: 10}}>
          <Pagination current={currentPage} total={searchResult?.length} pageSize={pageSize} onChange={handleChange}/>
        </Row>
      </Col>
      </Spin>
    </div>
  );
};
