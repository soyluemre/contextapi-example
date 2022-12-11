import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";

const PrivateRouter = () => {
  const { login } = useContext(LoginContext);

  return <div>{login ? <Outlet /> : <Navigate to="/login" />}</div>;
};

export default PrivateRouter;
