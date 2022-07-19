import React, { useState } from "react";
import { Anchor, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useAuth } from "../../hooks/contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

const { Link } = Anchor;

function AppHeader() {
  const [visible, setVisible] = useState(false);
  const [size, setSize] = useState();
  const { clearToken, setToken } = useAuth();
  const navigate = useNavigate();

  const showDrawer = () => {
    setVisible(true);
    setSize("default");
  };

  const onClose = () => {
    setVisible(false);
  };

  const logOut = () => {
    console.log('da')
    window.localStorage.clear();
    navigate('/')
  }

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <i className="fas fa-bolt"></i>
          <a href="http://google.com">ToDoList</a>
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset="65">
            {!localStorage.getItem("token-pass") && (
              <Link href="/" title="Home" />
            )}
            {!localStorage.getItem("token-pass") && (
              <Link href="/login" title="Login" />
            )}
            {!localStorage.getItem("token-pass") && (
              <Link href="/signup" title="SignUp" />
            )}
            {localStorage.getItem("token-pass") && (
              <Link href="/mytodolist" title="MyToDoList" />
            )}
            {localStorage.getItem("token-pass") && (
              <Link href="/profile" title="Profile" />
            )}
            {localStorage.getItem("token-pass") && (
              <Link href="/"><a onClick={logOut} style={{ color: 'inherit'}}>Logout</a></Link>

            )}
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
              {!localStorage.getItem("token-pass") && (
                <Link href="/login" title="Login" />
              )}
              {!localStorage.getItem("token-pass") && (
                <Link href="/signup" title="SignUp" />
              )}
              {localStorage.getItem("token-pass") && (
                <Link href="/mytodolist" title="MyToDoList" />
              )}
              {localStorage.getItem("token-pass") && (
                <Link href="/profile" title="Profile" />
              )}
              {localStorage.getItem("token-pass") && (
              <Link href="/" onClick={logOut}>Logout</Link>

            )}
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;
