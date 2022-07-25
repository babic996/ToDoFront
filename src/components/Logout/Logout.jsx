import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import {notification} from 'antd';

export const Logout = () => {
  const navigate = useNavigate();
  const openNotification = (placement) => {
    notification.info({
      description:
        'Uspjesno ste se odjavili!',
      placement,
    });
  };
  useEffect(()=>{
    localStorage.clear('token-pass');
    navigate('/');
    openNotification('top');
  },[])
}
