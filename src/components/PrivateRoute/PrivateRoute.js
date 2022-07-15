import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/contexts/AuthProvider';

export default function PrivateRoute({children}) {
  const { hasAccess } = useAuth();
  // const hasAccess = () => true;

  return hasAccess() ? children: <Navigate to="/login" />
}
