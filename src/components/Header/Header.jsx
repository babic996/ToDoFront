import React, { useState } from 'react';

import { Anchor, Drawer, Button } from 'antd';

import {MenuOutlined} from '@ant-design/icons';

const { Link } = Anchor;

function AppHeader() {
    const [visible, setVisible] = useState(false);
  
    const showDrawer = () => {
      setVisible(true);
    };
  
    const onClose = () => {
      setVisible(false);
    };
  
    return (
      <div className="container-fluid">
        <div className="header">
          <div className="logo">
            <i className="fas fa-bolt"></i>
            <a href="http://google.com">Tech</a>
          </div>
          <div className="mobileHidden">
            <Anchor targetOffset="65">
              <Link href="#hero" title="Home" />
              <Link href="#login" title="Login" />
            </Anchor>
          </div>
          <div className="mobileVisible">
            <Button type="primary" onClick={showDrawer}>
            <MenuOutlined />
            </Button>
            <Drawer
              placement="right"
              closable={false}
              onClose={onClose}
              visible={visible}
            >
              <Anchor targetOffset="65">
                <Link href="#hero" title="Home" />
                <Link href="#login" title="About" />
              </Anchor>
            </Drawer>
          </div>
        </div>
      </div>
    );
  }
  
  export default AppHeader;