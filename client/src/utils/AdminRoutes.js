import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
/* Learned from https://www.youtube.com/watch?v=2k8NleFjG7I */
function AdminRoutes() {
  const user = useSelector((state) => state.user.user);
  let auth = { token: user.name === "Admin" ? true : false };
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
}

export default AdminRoutes;
