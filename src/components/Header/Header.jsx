import React, { useState } from 'react';

import { Anchor, Drawer, Button } from 'antd';

import {MenuOutlined } from '@ant-design/icons';


const { Link } = Anchor;

function AppHeader() {
    const [visible, setVisible] = useState(false);
    const [size, setSize] = useState();
  
    const showDrawer = () => {
      setVisible(true);
      setSize('default');
    };
  
    const onClose = () => {
      setVisible(false);
    };

  
    return (
      <div className="container-fluid">
        <div className="header">
          <div className="logo">
            <i className="fas fa-bolt"></i>
            <a href="http://google.com">ToDoList</a>
          </div>
          <div className="mobileHidden">
            <Anchor targetOffset="65">
              <Link href="/" title="Home" />
              <Link href="/login" title="Login" /> 
              <Link href="/signup" title="SignUp" />
              <Link href="/mytodolist" title="MyToDoList" />
              <Link href="/profile" title="Profile" />
            </Anchor>
          </div>
          <div className="mobileVisible">
            <Button type="primary" onClick={showDrawer}>
            <MenuOutlined />
            </Button>
            <Drawer
              placement="right"
              size={size}
              closable={false}
              onClose={onClose}
              visible={visible}
            >
              <Anchor targetOffset="65">
                <Link href="/" title="Home" />
                <Link href="/login" title="Login" /> 
                <Link href="/signup" title="SignUp" />
                <Link href="/mytodolist" title="MyToDoList" />
                <Link href="/profile" title="Profile" />
              </Anchor>
            </Drawer>
          </div>
        </div>
      </div>
    );
  }
  
  export default AppHeader;