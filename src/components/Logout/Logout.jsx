import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

export const Logout = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    localStorage.clear('token-pass');
    navigate('/');
  },[])
}