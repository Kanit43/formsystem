import React, { useContext, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router";
import { AuthContext } from "./AuthContext";

export const PrivatedRoute = () => {
  const location = useLocation();
  const { user, roleUser, loading } = useContext(AuthContext);

  console.log("render", user, roleUser);
  if (loading) {
    console.log("loading");
    return "Loading...";
  } else if (user && !roleUser) {
    console.log("wait for role");
    return "Loading...";
  } else if (user && roleUser) {
    return <Outlet context={{ user, roleUser }} />;
  } else return <Navigate to="/login" state={{ form: location }}></Navigate>;
};
