import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import IdleTimer from "../IdleTimer";
import { fetch_users } from "../reduxUtils/action";

const PrivateRoute = ({ children, ...rest }) => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetch_users()), [dispatch]);
  return rest.email ? (
    <React.Fragment>
      {children}
      <IdleTimer />
    </React.Fragment>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
