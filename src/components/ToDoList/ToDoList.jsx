import React from "react";
import { useState, useEffect } from "react";
import { Row, Col } from "antd";
import { Input, Button, Card, List, Form, Spin, Pagination } from "antd";
import { PlusCircleOutlined, SearchOutlined } from "@ant-design/icons";
import { ToDoItem } from "../ToDoItem/ToDoItem";
import { useTasks } from "../../hooks/services/useTasks";
import { useAddTask } from "../../hooks/services/useTasks";
import useUpdateEffect from "../../hooks/services/useUpdateEffect";

export const ToDoList = () => {
  const { data: tasks } = useTasks();
  const [list, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const { mutate, data, isSuccess, isError, isLoading } = useAddTask();

  
  useEffect(() => {
    setList(tasks);
    console.log(list);
  }, [tasks]);
  


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


  
  useEffect(()=>{
    if(!list)
    {
      setSearchResult(tasks);
    }
    else
    {
      const filteredResults = list.filter((item)=>
      ((item.description).toLowerCase()).includes(search.toLowerCase()));
      setSearchResult(filteredResults.reverse());
    }
  }, [list, search])

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
        <Row gutter={[40, 16]}>
          <Col span={15} offset={1}>
              <Input prefix={<SearchOutlined />} value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search" />
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
            renderItem={(item) => (
              <ToDoItem rowKey={item._id} item={item} /> //todo:
            )}
          />
          {/* <Pagination current={currentPage} total={list.length} pageSize={3} onChange={(page)=>{setCurrentPage(page);}} /> */}
        </Card>
      </Col>
      </Spin>
    </div>
  );
};
