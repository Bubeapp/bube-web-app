import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { UserContext } from '../../contexts/user/userContext';

function ProtectedRoute({ component: Component, ...otherProps }) {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);

  if (!currentUser) return <Navigate to="/signin" replace />;

  return <Component {...otherProps} />;
}

export default ProtectedRoute;
