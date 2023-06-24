import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
/* Learned from https://www.youtube.com/watch?v=2k8NleFjG7I */
function PrivateRoutes() {
  const user = useSelector((state) => state.user.user);
  let auth = { token: user === null ? false : true };
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;
